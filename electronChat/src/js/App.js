import HomeView from "./views/Home";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <div className="content-wrapper">
          <Navbar />
          <Routes>
            <Route path={"/settings"} element={<h1>I am Settings Viewer</h1>} />
            <Route path={"/login"} element={<h1>I am Login Viewer</h1>} />
            <Route path={"/register"} element={<h1>I am Register Viewer</h1>} />
            <Route path={"/"} element={<HomeView />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
