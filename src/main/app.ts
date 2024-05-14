import { app, BrowserWindow, contextBridge, ipcMain, ipcRenderer, OpenExternalOptions, shell } from 'electron';
import { createAppWindow } from './appWindow';
import { useLogger } from './logs';
import fs from 'fs';
import config from './config';

const { log } = useLogger();

if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('ready', createAppWindow);


app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createAppWindow();
  }
});

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit();
  }
});


ipcMain.on("log", async (event, data) => {
  log(data);
});

ipcMain.on("readconfig", async (event, data) => {

  
  event.sender.send("sendconfig", config);

});



