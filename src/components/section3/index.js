import { useTranslations } from "next-intl";
import { Section3 } from "./Section3";

export const Section3_index = () => {
  const t = useTranslations("section_3");

  const small = t("small");
  const title = t("title");
  const title_1 = t("title_1");
  const title_2 = t("title_2");
  const title_3 = t("title_3");

  const text_1 = t.rich("text_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_2 = t.rich("text_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_3_1 = t.rich("text_3_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_3_2 = t.rich("text_3_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_3_3 = t.rich("text_3_3", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const translations = {
    title,
    small,
    title_1,
    title_2,
    title_3,
    text_1,
    text_2,
    text_3_1,
    text_3_2,
    text_3_3,
  };

  return <Section3 translations={translations} />;
};
