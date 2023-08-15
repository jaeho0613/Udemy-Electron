import JoinedChatList from "../components/JoinedChatList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import { useEffect } from "react";
import { fetchChats } from "../actions/chats";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => {
    console.log(chats);
    return chats.items;
  });

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatList chats={chats} />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={"Chooses your channel"} />
        <AvailableChatsList chats={chats} />
      </div>
    </div>
  );
};

export default Home;
