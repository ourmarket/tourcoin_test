import { Navbar_index } from "@/components/navbar";
import MainProfile from "@/components/profile_original/main/Main";
import { Footer } from "@/components/footer/Footer";
import { useTranslations } from "next-intl";

export default function Profile() {
  const t = useTranslations("profile");

  const translations = {
    connect: t("connect"),
  };

  return (
    <>
      <Navbar_index marquee={false} languageReload={true} />
      <MainProfile translations={translations} />
      <Footer />
    </>
  );
}
