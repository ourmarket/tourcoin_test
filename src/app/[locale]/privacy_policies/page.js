import { Navbar_index } from "@/components/navbar";
import { Footer } from "@/components/footer/Footer";
import { useTranslations } from "next-intl";

export default function PrivacyPolicies() {
  const t = useTranslations("profile");

  const translations = {
    connect: t("connect"),
  };

  return (
    <>
      <Navbar_index marquee={false} languageReload={true} />

      <Footer />
    </>
  );
}
