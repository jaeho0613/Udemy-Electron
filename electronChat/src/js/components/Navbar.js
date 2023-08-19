import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";

const Navbar = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

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
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <Link to="/" className="btn btn-outline-success ml-2">
            Login
          </Link>
          {user && (
            <button
              onClick={() => dispatch(logout())}
              className="btn btn-outline-danger ml-2"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
