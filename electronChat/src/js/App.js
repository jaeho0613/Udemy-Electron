import HomeView from "./views/Home";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Settings from "./views/Settings";
import Login from "./views/Login";
import Register from "./views/Register";

const App = () => {
  return (
    <>
      <Router>
        <div className="content-wrapper">
          <Navbar />
          <Routes>
            <Route path={"/"} element={<HomeView />} />
            <Route path={"/settings"} element={<Settings />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
