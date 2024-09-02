import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";

const FrontendLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default FrontendLayout;
