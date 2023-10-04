import * as api from "../api/connection";

export const checkUserConnection = (uid) => (dispatch) =>
  api.onConnectionChanged((isConnected) => {
    api.setUserOnlineStatus(uid, isConnected).then();
    dispatch({ type: "CONNECTION_USER_STATUS_CHANGED" });
  });
