const express = require("express");
const expressApp = express();

const electron = require('electron');
const electronApp = electron.app;
const BrowserWindow = electron.BrowserWindow;

expressApp.configure(function() {
  expressApp.use(express.static(__dirname));
});

console.log('listening on 80');
expressApp.listen(80);

let mainWin;
function openMain() {
  if (mainWin != null) return;
  mainWin = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  });
  mainWin.loadURL('http://localhost/#9PFWxTJ');
  mainWin.on('closed', () => {
    mainWin = null;
  });
}

electronApp.on('ready', openMain);

electronApp.on('window-all-closed', () => {
  if (process.platform !== 'darwin') electronApp.quit();
});

electronApp.on('activate', () => {
  if (mainWin == null) openMain();
});
