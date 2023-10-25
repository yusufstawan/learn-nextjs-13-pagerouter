import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      {/* <img src="/404.png" alt="404" className={styles.error__image} /> */}
      <Image src="/404.png" alt="404" className={styles.error__image} width={500} height={500} />
      <div>Halaman tidak ditemukan</div>
    </div>
  );
};

export default Custom404;
