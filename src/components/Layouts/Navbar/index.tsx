import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>
      {data && data.user.fullname}
      {data ? (
        <button className={styles.button} onClick={() => signOut()}>
          Sign Out
        </button>
      ) : (
        <button className={styles.button} onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
