import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";
import { Banner_index } from "@/components/tutorials/banner";
import { Section1_index } from "@/components/tutorials/section1";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={true} languageReload={false} />

      <Banner_index />
      <Section1_index />
      <Footer />
    </main>
  );
}
