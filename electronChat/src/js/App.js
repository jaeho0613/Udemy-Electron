import HomeView from "./views/Home";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SettingsView from "./views/Settings";
import LoginView from "./views/Login";
import RegisterView from "./views/Register";
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
              <Route path={"/"} element={<HomeView />} />
              <Route path={"/chat/:id"} element={<ChatView />} />
              <Route path={"/settings"} element={<SettingsView />} />
              <Route path={"/login"} element={<LoginView />} />
              <Route path={"/register"} element={<RegisterView />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>
  );
};

export default App;
