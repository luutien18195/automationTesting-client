const path = require("path");

const {app, BrowserWindow} = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the index.html of the app
  // win.loadFile("index.html");
  const URL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;
  console.log("loading URL ...", URL);
  win.loadFile('public/loading.html')
  .then(() => {
    return win.loadURL(URL);
  })
  .then(() => {
    //Open the devtools
    if (isDev) {
        win.webContents.openDevTools({mode: "detach"});
    }
  });

  //Open the devtools
  if (isDev) {
    win.webContents.openDevTools({mode: "detach"});
  }
}

// This method will be called when Electron has finished
// Initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it;s common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
