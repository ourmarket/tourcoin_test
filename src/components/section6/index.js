import { useTranslations } from "next-intl";
import { Section6 } from "./Section6";

export const Section6_index = () => {
  const t = useTranslations("section_6");

  const small = t.rich("small", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title = t.rich("title", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const p_1 = t.rich("p_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title_1 = t.rich("title_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_1 = t.rich("text_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title_2 = t.rich("title_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_2 = t.rich("text_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const translations = {
    small,
    title,
    p_1,
    title_1,
    text_1,
    title_2,
    text_2,
  };

  return <Section6 translations={translations} />;
};
