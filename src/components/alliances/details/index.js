import { useTranslations } from "next-intl";
import DetailsFetch from "./DetailsFetch";

export const Details_index = () => {
  const t = useTranslations("section_1_services_rooms");

  const consult = t("consult");
  const airbnb = t("airbnb");

  const translations = {
    consult,
    airbnb,
  };

  return <DetailsFetch translations={translations} />;
};
