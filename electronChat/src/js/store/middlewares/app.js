import Notification from "../../utils/notifications";
export default (store) => (next) => (action) => {
  switch (action.type) {
    case "app_is_online":
    case "app_is_offline": {
      Notification.show({
        title: "Connection status:",
        body: action.isOnline ? "Online" : "Offline",
      });
    }
  }

  next(action);
};
