import style from "./FreeDomain.module.css";

const FreeDomain = () => {
  return (
    <div className={style.freeDomain}>
      <div className="container-fluid h-100">
        <header
          className={`h-100 d-flex flex-column gap-3  justify-content-center ${style.freeDomainContent}`}
        >
          <h2 className="text-white ">Get a domain</h2>
          <p className="text-white ">
            Give your blog the perfect home. Get a blogspot.com domain or buy a
            custom domain with just a few clicks.
          </p>
        </header>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default FreeDomain;
