import { useTranslations } from "next-intl";
import { Section7 } from "./Section7";

export const Section7_index = () => {
  const t = useTranslations("section_7");

  const small = t.rich("small", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title = t.rich("title", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const p_1 = t.rich("p_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const translations = {
    small,
    title,
    p_1,
  };

  return <Section7 translations={translations} />;
};
