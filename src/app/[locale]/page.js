import { Navbar_index } from "@/components/navbar";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import BannerSearch_index from "@/components/home/section1";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={true} />
      <BannerSearch_index />
      <Footer />
    </main>
  );
}
