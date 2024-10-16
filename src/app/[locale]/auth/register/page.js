import { Navbar_index } from "@/components/navbar";
import { Footer } from "@/components/footer/Footer";
import { useTranslations } from "next-intl";
import Register from "@/components/auth/register/Register";

export default function RegisterPage() {
  const t = useTranslations("profile");

  const translations = {
    connect: t("connect"),
  };

  return (
    <>
      <Navbar_index marquee={false} languageReload={true} />
      <Register translations={translations} />
      <Footer />
    </>
  );
}
