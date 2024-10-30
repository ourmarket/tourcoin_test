import { useTranslations } from "next-intl";
import BannerSearch from "./BannerSearch";

const BannerSearch_index = () => {
  const t_nav = useTranslations("section_1_services_nav");
  const t_home = useTranslations("home");

  const translations = {
    li_1: t_nav("li_1"),
    li_2: t_nav("li_2"),
    li_3: t_nav("li_3"),
    li_4: t_nav("li_4"),
    li_5: t_nav("li_5"),
    li_6: t_nav("li_6"),

    banner_1_1400: t_home("banner_1_1400"),
    banner_2_1400: t_home("banner_2_1400"),
    banner_1_530: t_home("banner_1_530"),
    banner_2_530: t_home("banner_2_530"),
  };

  return <BannerSearch translations={translations} />;
};

export default BannerSearch_index;
