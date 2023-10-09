
const { ipcRenderer, contextBridge } = require('electron');


contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  appApi: {
    quiteApp() {
      ipcRenderer.send('app-quit');
    }
  },
  batteryApi: {

  },
  fileApi: {

  }
})
