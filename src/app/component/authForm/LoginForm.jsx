const LoginForm = () => {
  return (
    <form>
      <div className="form-group position-relative mb-3 ">
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Enter your email "
        />
      </div>
      <div className="form-group position-relative mb-3 ">
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
