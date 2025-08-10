/* electron/main.cjs */
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        frame: false, // Deshabilita barra nativa (sin borde ni barra superior)
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    })

    win.loadURL('http://localhost:5174')

    // Opcional: deshabilitar barra de menú
    //win.setMenu(null)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// IPC handlers para controlar la ventana desde renderer
ipcMain.handle('window-minimize', () => win.minimize())
ipcMain.handle('window-maximize', () => {
    if (win.isMaximized()) win.unmaximize()
    else win.maximize()
})
ipcMain.handle('window-close', () => win.close())
ipcMain.handle('window-isMaximized', () => win.isMaximized())
