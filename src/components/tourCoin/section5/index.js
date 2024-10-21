import { useTranslations } from "next-intl";
import { Section5 } from "./Section5";

export const Section5_index = () => {
  const t = useTranslations("section_5");

  const small = t.rich("small", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title = t.rich("title", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const p_1 = t.rich("p_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const p_2 = t.rich("p_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const days_t = t("days");
  const hours_t = t("hours");
  const minutes_t = t("minutes");
  const seconds_t = t("seconds");

  const translations = {
    small,
    title,
    p_1,
    p_2,
    days_t,
    hours_t,
    minutes_t,
    seconds_t,
  };

  return <Section5 translations={translations} />;
};
