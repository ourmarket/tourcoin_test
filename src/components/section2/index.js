import { useTranslations } from "next-intl";
import { Section2 } from "./Section2";

export const Section2_index = () => {
  const t = useTranslations("section_2");

  const h2 = t.rich("h2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const small = t("small");
  const p_1 = t("p_1");

  const title_3 = t("card_3.title");
  const title_5 = t("card_5.title");
  const title_4 = t("card_4.title");

  const text_3 = t.rich("card_3.text", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_5 = t.rich("card_5.text", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_4 = t.rich("card_4.text", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const translations = {
    small,
    h2,
    p_1,
    title_3,
    title_4,
    title_5,
    text_3,
    text_5,
    text_4,
  };

  return <Section2 translations={translations} />;
};
