import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";

import { Section1_index } from "@/components/alliances/section1";
import { NavbarServices_index } from "@/components/alliances/navbar";

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={false} languageReload={false} />
      <NavbarServices_index />
      <Section1_index />
      <Footer />
    </main>
  );
}
