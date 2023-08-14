import ChatUsersList from "../components/ChatUsersList";
import ViewTitle from "../components/shared/ViewTitle";
import ChatMessagesList from "../components/ChatMessagesList";

const Chat = () => {
  return (
    <>
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <ChatUsersList />
        </div>
        <div className="col-9 fh">
          <ViewTitle />
          <ChatMessagesList />
        </div>
      </div>
    </>
  );
};

export default Chat;
