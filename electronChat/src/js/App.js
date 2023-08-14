import HomeView from "./views/Home";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SettingsView from "./views/Settings";
import LoginView from "./views/Login";
import RegisterView from "./views/Register";
import ChatView from "./views/Chat";

const App = () => {
  return (
    <>
      <Router>
        <div className="content-wrapper">
          <Navbar />
          <Routes>
            <Route path={"/"} element={<HomeView />} />
            <Route path={"/chat"} element={<ChatView />} />
            <Route path={"/settings"} element={<SettingsView />} />
            <Route path={"/login"} element={<LoginView />} />
            <Route path={"/register"} element={<RegisterView />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
