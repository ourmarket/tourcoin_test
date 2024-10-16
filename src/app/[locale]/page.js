import styles from "./page.module.css";
import { Banner_index } from "@/components/banner";
import { Section1_index } from "@/components/section1";
import { Section2_index } from "@/components/section2";
import { Section4_index } from "@/components/section4";
import { Section3_index } from "@/components/section3";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";
import { Section7_index } from "@/components/section7";
import { Section8_index } from "@/components/section8";
import { Section9_index } from "@/components/section9";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={false} />
      <Banner_index />
      <Section1_index />
      <Section2_index />
      <Section9_index />
      <Section4_index />
      <Section3_index />
      <Section8_index />
      <Section7_index />
      <Footer />
    </main>
  );
}
