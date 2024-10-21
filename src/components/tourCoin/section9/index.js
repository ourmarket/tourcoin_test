import { useTranslations } from "next-intl";
import { Section9 } from "./Section9";

export const Section9_index = () => {
  const t = useTranslations("section_9");

  const small = t.rich("small", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title = t.rich("title", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const p_1 = t.rich("p_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const li_1 = t("li_1");
  const li_2 = t("li_2");
  const li_3 = t("li_3");
  const li_4 = t("li_4");
  const li_5 = t("li_5");
  const li_6 = t("li_6");
  const li_7 = t("li_7");
  const li_8 = t("li_8");
  const li_9 = t("li_9");
  const li_10 = t("li_10");

  const card_title = t("card_title");
  const Network = t("Network");
  const Contrato = t("Contrato");
  const Nombre = t("Nombre");
  const Simbolo = t("Simbolo");
  const img_url = t("img_url");
  const p_2 = t.raw("p_2");

  const translations = {
    small,
    title,
    p_1,
    p_2,
    li_1,
    li_2,
    li_3,
    li_4,
    li_5,
    li_6,
    li_7,
    li_8,
    li_9,
    li_10,
    card_title,
    Network,
    Contrato,
    Nombre,
    Simbolo,
    img_url,
  };

  return <Section9 translations={translations} />;
};
