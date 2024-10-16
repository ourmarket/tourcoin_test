import { Details_index } from "@/components/alliances/details";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar_index />
      <Details_index />
      <Footer />
    </main>
  );
}
