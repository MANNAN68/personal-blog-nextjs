import style from "./ChooseDesign.module.css";

const ChooseDesign = () => {
  return (
    <div className={style.chooseDesign}>
      <div className="container-fluid h-100">
        <header
          className={`h-100 d-flex flex-column gap-3  justify-content-center ${style.chooseContent}`}
        >
          <h2 className="text-white ">Choose the perfect design</h2>
          <p className="text-white ">
            Create a beautiful blog that fits your style. Choose from a
            selection of easy-to-use templates – all with flexible layouts and
            hundreds of background images – or design something new.
          </p>
        </header>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default ChooseDesign;
