import { useTranslations } from "next-intl";
import { Section4 } from "./Section4";

export const Section4_index = () => {
  const t = useTranslations("section_4");

  const small = t("small");
  const title = t("title");
  const p_1 = t("p_1");

  const translations = {
    small,
    title,
    p_1,
  };

  return <Section4 translations={translations} />;
};
