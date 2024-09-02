import FrontendLayout from "@/app/layout/FrontendLayout";

const Layout = ({ children }) => {
  return (
    <>
      <div className="authLayout">
        <FrontendLayout>
          <div className="auth-wrapper">
            <div className="container-fluid">{children}</div>
          </div>
        </FrontendLayout>
      </div>
    </>
  );
};

export default Layout;
