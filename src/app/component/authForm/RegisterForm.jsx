const RegisterForm = () => {
  return (
    <form>
      <div className="form-group position-relative mb-3 ">
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </div>
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
      {/* <div className="form-group position-relative mb-3 ">
        <input
          type="password"
          className="form-control"
          name="confirm-password"
          id="confirm-password"
          placeholder="Enter your confirm-password"
          value=""
        />
      </div> */}

      <button type="submit" className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
