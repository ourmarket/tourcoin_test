import { useTranslations } from "next-intl";
import { Section1 } from "./Section1";

export const Section1_index = () => {
  const t = useTranslations("section_1_services");

  const h2 = t.rich("h2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const small = t("small");
  const p_1 = t("p_1");

  const translations = {
    small,
    h2,
    p_1,
  };

  return <Section1 translations={translations} />;
};
