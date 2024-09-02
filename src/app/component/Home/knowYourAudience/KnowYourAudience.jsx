import style from "./KnowYourAudience.module.css";

const KnowYourAudience = () => {
  return (
    <div className={style.knowYourAudience}>
      <div className="container-fluid h-100">
        <header
          className={`h-100 d-flex flex-column gap-3  justify-content-center ${style.audienceContent}`}
        >
          <h2 className="text-white ">Know your audience</h2>
          <p className="text-white ">
            Find out which posts are a hit with Blogger’s built-in analytics.
            You’ll see where your audience is coming from and what they’re
            interested in. You can even connect your blog directly to Google
            Analytics for a more detailed look.
          </p>
        </header>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default KnowYourAudience;
