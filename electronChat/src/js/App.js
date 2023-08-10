import React from 'react';

const App = () => {
	const onClickNotification = () => {
		// window.sendNotification('notify', 'This is my custom message!');
		electron
		.notificationApi
		.sendNotification('My custom message!@!@');
	}

	return <>
		<h2>React Electron</h2>
		<button onClick={onClickNotification}>Show Notification</button>
	</>
}

export default App;
