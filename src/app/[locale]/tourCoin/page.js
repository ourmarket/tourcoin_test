import { Navbar_index } from "@/components/navbar";
import styles from "./page.module.css";
import { Banner_index } from "@/components/banner";
import { Section1_index } from "@/components/alliances/section1";
import { Section2_index } from "@/components/tourCoin/section2";
import { Section9_index } from "@/components/tourCoin/section9";
import { Section4_index } from "@/components/tourCoin/section4";
import { Section3_index } from "@/components/tourCoin/section3";
import { Section8_index } from "@/components/tourCoin/section8";
import { Section7_index } from "@/components/tourCoin/section7";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar_index marquee={true} />
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
