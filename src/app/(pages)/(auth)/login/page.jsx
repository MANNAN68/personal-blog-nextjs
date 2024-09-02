import LoginForm from "@/app/component/authForm/LoginForm";
import Link from "next/link";
import "@/app/(pages)/(auth)/auth.css";

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <p className="my-3">
        Don't you have an account?
        <Link href="/register" className="mx-2 underline">
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
