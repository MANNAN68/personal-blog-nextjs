import CurrentYear from "./CurrentYear";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer_wrapper}>
      <div className="container-fluid h-100">
        <footer className="h-100 d-flex align-items-center justify-content-center">
          <CurrentYear />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
