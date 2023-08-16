import HomeView from "./views/Home";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SettingsView from "./views/Settings";
import WelcomeView from "./views/Welcome";
import ChatView from "./views/Chat";
import { Provider } from "react-redux";
import { configureStore } from "./store";

const App = () => {
  return (
    <>
      <Provider store={configureStore()}>
        <Router>
          <div className="content-wrapper">
            <Navbar />
            <Routes>
              <Route path={"/"} element={<WelcomeView />} />
              <Route path={"/home"} element={<HomeView />} />
              <Route path={"/chat/:id"} element={<ChatView />} />
              <Route path={"/settings"} element={<SettingsView />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>
  );
};

export default App;
