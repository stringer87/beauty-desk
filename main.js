const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    center: true,
    // resizable: false,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecutionJavaScript: true,
      contextIsolation: true,
      // allowRunningInsecureContent: true
    }
  })
  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})