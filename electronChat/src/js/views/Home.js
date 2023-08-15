import JoinedChatList from "../components/JoinedChatList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import { useEffect } from "react";
import { fetchChats } from "../actions/chats";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChats());
  }, []);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={"Chooses your channel"} />
        <AvailableChatsList />
      </div>
    </div>
  );
};

export default Home;
