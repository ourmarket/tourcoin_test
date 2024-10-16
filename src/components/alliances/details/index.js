import { useTranslations } from "next-intl";
import { Details } from "./Details";

export const Details_index = () => {
  const t = useTranslations("section_1_services_rooms");

  const consult = t("consult");
  const airbnb = t("airbnb");

  const translations = {
    consult,
    airbnb,
  };

  return <Details translations={translations} />;
};
