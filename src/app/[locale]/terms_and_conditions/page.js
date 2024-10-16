import { Navbar_index } from "@/components/navbar";
import { Footer } from "@/components/footer/Footer";
import { useTranslations } from "next-intl";

export default function TermsAndConditions() {
  const t = useTranslations("profile");

  return (
    <>
      <Navbar_index marquee={false} languageReload={true} />

      <Footer />
    </>
  );
}
