import Link from "next/link";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={style.heroSection}>
      <div className="container-fluid">
        <header
          className={`w-100 d-flex flex-column gap-3 align-items-center justify-content-center ${style.heroContent}`}
        >
          <h2 className="text-white text-center">
            Publish your passions, your way
          </h2>
          <p className="text-white text-center">
            Create a unique and beautiful blog easily.
          </p>

          <Link
            href="/"
            className="btn btn-primary btn-sm d-flex align-items-center justify-content-center "
          >
            Create your blog
          </Link>
        </header>
        <div className={style.heroBackground}>
          <div className={`theme ${style.green}`}></div>
          {/* <div className={`theme ${style.blue}`}></div>
          <div className={`theme ${style.red}`}></div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
