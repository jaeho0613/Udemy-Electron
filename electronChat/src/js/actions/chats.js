import * as api from "../api/chats";
export const fetchChats = () => {
  return async () => {
    const chats = await api.fetchChats();
  };
};
