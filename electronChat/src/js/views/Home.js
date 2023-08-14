import JoinedChatList from "../components/JoinedChatList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";

const Home = () => {
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
