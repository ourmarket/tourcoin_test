import { useTranslations } from "next-intl";
import { Section1 } from "./Section1";

export const Section1_index = () => {
  const t = useTranslations("section_1");

  const title1 = t.rich("title_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title2 = t.rich("title_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const text_1_1 = t.rich("text_1_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_1_2 = t.rich("text_1_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const text_2_1 = t.rich("text_2_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_2_2 = t.rich("text_2_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const button = t("button");

  const translations = {
    title1,
    title2,
    text_1_1,
    text_1_2,
    text_2_1,
    text_2_2,
    button,
  };

  return <Section1 translations={translations} />;
};
