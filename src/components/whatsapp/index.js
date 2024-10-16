import Image from "next/image";
import styles from "./whatsapp.module.css";

export const Whatsapp = () => {
  return (
    <div className={styles.whatsapp}>
      <a href="https://wa.link/t1rj0k" target="_blank">
        <Image
          src={
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/WAPP_k23a6eSe5o.png?updatedAt=1714570727905"
          }
          width={70}
          height={70}
          alt="whatsapp"
          className={styles.image}
          priority
        />
      </a>
    </div>
  );
};
