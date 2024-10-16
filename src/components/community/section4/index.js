import { useTranslations } from "next-intl";
import { Section4 } from "./Section4";

export const Section4_index = () => {
  const t = useTranslations("section_1_community");

  const translations = {
    small: t("small"),
    title: t.rich("title", {
      code: (chunks) => <code className="strong">{chunks}</code>,
    }),
    p_1: t.rich("p_1", {
      code: (chunks) => <code className="strong">{chunks}</code>,
    }),
    p_2: t.raw("p_2"),
    title_3: t.rich("title_3", {
      code: (chunks) => <code className="strong">{chunks}</code>,
    }),
    p_3: t.raw("p_3"),
  };

  return <Section4 translations={translations} />;
};
