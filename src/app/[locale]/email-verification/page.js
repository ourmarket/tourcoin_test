import { Navbar_index } from "@/components/navbar";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import RedirectPage from "./redirect";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={true} />
      <RedirectPage />
      <Footer />
    </main>
  );
}
