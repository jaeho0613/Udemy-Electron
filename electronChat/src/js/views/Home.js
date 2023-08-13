import Navbar from "../components/Navbar";
import JoinedChat from "../components/JoinedChat";
import AvailableChats from "../components/AvailableChats";
import ViewTitle from "../components/shared/ViewTitle";

const Home = () => {
  return (
    <div className="content-wrapper">
      <Navbar />
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinedChat />
        </div>
        <div className="col-9 fh">
          <ViewTitle />
          <AvailableChats />
        </div>
      </div>
    </div>
  );
};

export default Home;
