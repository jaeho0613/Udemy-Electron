import { useForm } from "react-hook-form";

const LoginForm = () => {
  const formData = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form
      onSubmit={formData.handleSubmit(onSubmit)}
      className="centered-container-form"
    >
      <div className="header">Welcome here!</div>
      <div className="subheader">Login and chat with other people!</div>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            {...formData.register("password")}
          />
        </div>
        {false && <div className="alert alert-danger small">Some error</div>}
        <button type="submit" className="btn btn-outline-primary">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
