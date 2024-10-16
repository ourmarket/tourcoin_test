import { useTranslations } from "next-intl";
import { Rooms } from "./Rooms";

export const Rooms_index = () => {
  const t = useTranslations("section_1_services_rooms");

  const consult = t("consult");
  const airbnb = t("airbnb");

  const translations = {
    consult,
    airbnb,
  };

  return <Rooms translations={translations} />;
};
