import styles from "./page.module.css";

import { Navbar_index } from "@/components/navbar";

import { Section1_index } from "@/components/alliances/section1";
import { NavbarServices_index } from "@/components/alliances/navbar";

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={false} languageReload={false} />
      <NavbarServices_index />
      <Section1_index />
    </main>
  );
}
