import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const history = useNavigate();
  const data = useSelector((state) => {
    return state.message;
  });

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            className={"btn btn-outline-primary"}
            onClick={() => history(-1)}
          >
            Back
          </button>
          <button
            onClick={() => history("/settings")}
            className="btn btn-outline-success ml-2"
          >
            Settings
          </button>
          {data}
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <Link to="/register" className="btn btn-outline-danger ml-2">
            Register
          </Link>
          <Link to="/login" className="btn btn-outline-success ml-2">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
