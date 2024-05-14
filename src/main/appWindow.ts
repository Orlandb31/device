import { app, BrowserWindow } from 'electron';
import path from 'path';
import { registerTitlebarIpc } from '@main/window/titlebarIpc';
import axios from 'axios';
import config from './config';
import { useLogger } from './logs';
const { log } = useLogger();

// Electron Forge automatically creates these entry points
declare const APP_WINDOW_WEBPACK_ENTRY: string;
declare const APP_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let appWindow: BrowserWindow;
const { width, height } = { width: config?.width, height: config?.height };
console.log(width,height)
/**
 * Create Application Window
 * @returns {BrowserWindow} Application Window Instance
 */
export function createAppWindow(): BrowserWindow {
  // Create new window instance
  appWindow = new BrowserWindow({
    width: width,
    height: height,
    backgroundColor: '#202020',
    icon: path.resolve('assets/images/appIcon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: APP_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });



  if (process.env.NODE_ENV == 'development') {
    appWindow.webContents.openDevTools()
    appWindow.setMenuBarVisibility(true);
  }
  else {
    appWindow.setAlwaysOnTop(true)
    appWindow.setFullScreen(true)
    appWindow.setKiosk(true);
    appWindow.setMenuBarVisibility(false);

  }



  // Load the index.html of the app window.
  appWindow.loadURL(APP_WINDOW_WEBPACK_ENTRY);

  // Show window when its ready to
  appWindow.on('ready-to-show', () => appWindow.show());

  const patchCSP = () => {
    appWindow?.webContents.session.webRequest.onHeadersReceived((details, callback) => {
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          "Content-Security-Policy": [
            [
              "default-src * 'unsafe-inline' 'unsafe-eval' data: blob: file:",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' data: file:",
              "media-src * 'unsafe-inline' 'unsafe-eval' data: blob: file:",
            ].join("; "),
          ],
        },
      });
    });
  };

  patchCSP()

  // Register Inter Process Communication for main process
  registerMainIPC();





  // Close all windows when main window is closed
  appWindow.on('close', () => {
    appWindow = null;
    app.quit();
  });

  return appWindow;
}

/**
 * Register Inter Process Communication
 */
function registerMainIPC() {
  /**
   * Here you can assign IPC related codes for the application window
   * to Communicate asynchronously from the main process to renderer processes.
   */
  registerTitlebarIpc(appWindow);



  setTimeout(async () => {

    try {

      let response = await axios.get(config?.health_check, {
        params: {
          "config": config
        }
      });
      if (response?.data) {
        console.log(config, "healt-check " + JSON.stringify(response?.data))
        appWindow?.webContents.send('fluyapp-update', { isOnline: true, data: response?.data })
      } else {
        appWindow?.webContents.send('fluyapp-update', { isOnline: false })
      }

    } catch (e) {

      appWindow?.webContents.send('fluyapp-update', { isOnline: false })

    }


  }, 10000)

  setInterval(async () => {

    try {

      let response = await axios.get(config?.health_check, {
        params: {
          "config": config
        }
      });
      if (response?.data) {
        appWindow?.webContents.send('fluyapp-update', { isOnline: true, data: response?.data })
      } else {
        appWindow?.webContents.send('fluyapp-update', { isOnline: false })
        log("No se pudo conectar con el servidor");
      }

    } catch (e) {
      log(JSON.stringify(e))
      // const stack = stackTrace.parse(e);
      // if (stack.length > 0) {
      //   const frame = stack[0];
      //   log(`Error en archivo: ${frame.getFileName()}, línea: ${frame.getLineNumber()}, Evalorigin: ${frame.getEvalOrigin()}, 
      //   Functionname: ${frame.getFunctionName()}, Methodname: ${frame.getMethodName()}, getFunction: ${frame.getFunction()} `);
      // }

      appWindow?.webContents.send('fluyapp-update', { isOnline: false })

    }

  }, 30000)

}


