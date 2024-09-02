import RegisterForm from "@/app/component/authForm/RegisterForm";
import Link from "next/link";
import "@/app/(pages)/(auth)/auth.css";

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
      <p className="my-3">
        Don't you have an account?
        <Link href="/login" className="mx-2 underline">
          login
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
