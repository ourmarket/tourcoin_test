import { useTranslations } from "next-intl";
import BannerSearch from "./BannerSearch";

const BannerSearch_index = () => {
  const t_nav = useTranslations("section_1_services_nav");

  const li_1 = t_nav("li_1");
  const li_2 = t_nav("li_2");
  const li_3 = t_nav("li_3");
  const li_4 = t_nav("li_4");
  const li_5 = t_nav("li_5");

  const translations = {
    li_1,
    li_2,
    li_3,
    li_4,
    li_5,
  };

  return <BannerSearch translations={translations} />;
};

export default BannerSearch_index;
