import { Navbar_index } from "@/components/navbar";
import { Footer } from "@/components/footer/Footer";
import { useTranslations } from "next-intl";
import Login from "@/components/auth/login/Login";

export default function LoginPage() {
  const t = useTranslations("profile");

  const translations = {
    connect: t("connect"),
  };

  return (
    <>
      <Navbar_index marquee={false} languageReload={true} />
      <Login translations={translations} />
      <Footer />
    </>
  );
}
