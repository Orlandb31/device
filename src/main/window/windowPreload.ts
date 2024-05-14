import { contextBridge, ipcRenderer } from 'electron';
import titlebarContext from './titlebarContext';



contextBridge.exposeInMainWorld(
  'ipcRenderer',
  {
    send: (channel: any, arg: any) => ipcRenderer.send(channel, arg),
    on: ipcRenderer.on,
    onResponse: (fn: Function) => {
      ipcRenderer.on("sendconfig", (event, ...args) => fn(...args));      
    },
    onResponseFluyapp: (fn: Function) => {
      ipcRenderer.on("fluyapp-update", (event, ...args) => fn(...args));      
    },
   

 

  }
)