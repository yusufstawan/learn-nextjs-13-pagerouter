import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>
        Sudah punya akun? registrasi <Link href={"/auth/login"}>disini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
