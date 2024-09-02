import style from "./Millions.module.css";

const Millions = () => {
  return (
    <div className={style.millions}>
      <div className="container-fluid h-100">
        <header
          className={`h-100 d-flex flex-column gap-3  justify-content-center ${style.millionsContent}`}
        >
          <h2 className="text-white ">Join millions of others</h2>
          <p className="text-white ">
            Whether sharing your expertise, breaking news, or whatever’s on your
            mind, you’re in good company on Blogger. Sign up to discover why
            millions of people have published their passions here.
          </p>
        </header>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Millions;
