import Link from "next/link";
import styles from "./Login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const handleLogin = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl: callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      {error && <p className={styles.login__error}>{error}</p>}
      <div className={styles.login__form}>
        <form onSubmit={handleLogin}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item__label}>
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="email" className={styles.login__form__item__input} />
          </div>

          <div className={styles.login__form__item}>
            <label htmlFor="password" className={styles.login__form__item__label}>
              Password
            </label>
            <input type="password" id="password" name="password" placeholder="Password" className={styles.login__form__item__input} />
          </div>
          <button type="submit" className={styles.login__form__item__button} disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl,
              redirect: false,
            })
          }
          className={styles.login__form__item__google}
        >
          Sign In With Google
        </button>
      </div>
      <p className={styles.login__link}>
        Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginView;
