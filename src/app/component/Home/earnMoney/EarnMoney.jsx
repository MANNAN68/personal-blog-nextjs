import style from "./EarnMoney.module.css";

const EarnMoney = () => {
  return (
    <div className={style.earnMoney}>
      <div className="container-fluid h-100">
        <header
          className={`h-100 d-flex flex-column gap-3  justify-content-center ${style.earnContent}`}
        >
          <h2 className="text-white ">Earn money</h2>
          <p className="text-white ">
            Get paid for your hard work. Google AdSense can automatically
            display relevant targeted ads on your blog so that you can earn
            income by posting about your passion.
          </p>
        </header>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default EarnMoney;
