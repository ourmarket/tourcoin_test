import { Banner_index } from "@/components/community/banner";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";
import { Section4_index } from "@/components/community/section4";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={false} languageReload={false} />
      <Banner_index />
      <Section4_index />
      <Footer />
    </main>
  );
}
