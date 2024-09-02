import Link from "next/link";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar_wrapper}>
      <div className="container-fluid">
        <div className={`navbar ${style.navbar}`}>
          <div className={style.navbar_brand}>
            <Link href="/">MANNAN</Link>
          </div>
          <div className={style.navbar_menu}>
            <Link href="/login" className="">
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
