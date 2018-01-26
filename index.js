'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1400, height: 1000});
  mainWindow.loadURL('https://kibe.la/ja');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
