import { useTranslations } from "next-intl";
import { Section8 } from "./Section8";

export const Section8_index = () => {
  const t = useTranslations("section_8");

  const translations = {
    small: t("small"),
    title: t.raw("title"),
    p_1: t.raw("p_1"),
  };

  return <Section8 translations={translations} />;
};
