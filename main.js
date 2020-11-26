const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const { app, BrowserWindow } = require('electron')
const path = require('path')
const os = require('os')

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
  win.addDevToolsExtension(
    path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.3.0_0')
  ).then(() => {

    win.webContents.openDevTools()
  })
    .catch((err) => {
      console.error(err)
    })
}

// app.whenReady().then(createWindow)
app.whenReady().then(() => {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
  createWindow();
});
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