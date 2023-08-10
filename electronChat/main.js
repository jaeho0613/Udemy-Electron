// Main Process
const {app, BrowserWindow, Notification, ipcMain} = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
	// Browser Window <- Renderer Process
	const win = new BrowserWindow({
		width: 500, // 가로
		height: 1000, // 높이
		backgroundColor: "white", // 바탕색
		webPreferences:
			{
			nodeIntegration: false, // node 기반 라이브러리 사용 여부
			worldSafeExecuteJavaScript: true,
			contextIsolation: true, // 컨텍스트 분리 (찾아보기)
			preload: path.join(__dirname, 'preload.js')
		}
	})

	win.loadFile('index.html').then(); // 해당 파일을 읽음
	isDev && win.webContents.openDevTools(); // 실행 개발자 툴 열기
}

if (isDev) {
	require('electron-reload')(__dirname, {
		electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
	});
}

// Main Process 생성
app.whenReady()
.then(() => {
	const notification = new Notification({
		title: 'Hello World',
		body: 'My test message',
	})
	notification.show();
	createWindow();
})

// 알림 구독
ipcMain.on('notify', (_, args) => {
	new Notification({title: 'Notification', body: args}).show();
})

// 알림 구독
ipcMain.on('app-quit', (_, args) => {
	app.quit();
})

// mac os 를 위한 설정
// - 윈도우는 닫기 버튼을 누르면 프로세스가 꺼짐
// - mac 의 경우는 닫기 버튼을 누르면 프로세스는 남아있지만 화면만 꺼짐
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

// mac os 를 위한 설정
// - 맥의 경우 앱 아이콘을 누르면 화면이 진입됨 windows 가 없을 경우 새로 화면 생성
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
})

// webpack -> is a module builder, main purpose is to bundle JS files for usage in the browser
// babel
