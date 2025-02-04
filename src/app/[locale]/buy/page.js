import styles from "./page.module.css";

import { Navbar_index } from "@/components/navbar";

import { Footer } from "@/components/footer/Footer";
import Mercadopago from "@/components/buy/mercadopago/Mercadopago";

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={false} languageReload={false} />

      <Mercadopago />

      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
}
