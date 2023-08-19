import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/auth";

const RegisterForm = () => {
  const formData = useForm();
  const dispatch = useDispatch();

  const onSubmit = (registerData) => {
    dispatch(registerUser(registerData));
  };

  return (
    <form
      onSubmit={formData.handleSubmit(onSubmit)}
      className="centered-container-form"
    >
      <div className="header">Create an account</div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            {...formData.register("email")}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            {...formData.register("username")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            {...formData.register("avatar")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            {...formData.register("password")}
          />
        </div>
        {false && <div className="alert alert-danger small">Some Error</div>}
        <button type="submit" className="btn btn-outline-primary">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
