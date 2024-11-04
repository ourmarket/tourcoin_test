import { useTranslations } from "next-intl";
import BannerSearch from "./BannerSearch";

const BannerSearch_index = () => {
  const t_nav = useTranslations("section_1_services_nav");
  const t_home = useTranslations("home");
  const t_banner = useTranslations("banner_home");

  const translations = {
    li_1: t_nav("li_1"),
    li_2: t_nav("li_2"),
    li_3: t_nav("li_3"),
    li_4: t_nav("li_4"),
    li_5: t_nav("li_5"),
    li_6: t_nav("li_6"),

    banner_1_1400: t_banner("banner_1_1400"),
    banner_2_1400: t_banner("banner_2_1400"),
    banner_1_530: t_banner("banner_1_530"),
    banner_2_530: t_banner("banner_2_530"),

    title: t_home("title"),
    placeholder: t_home("placeholder"),
    button: t_home("button"),
    recommendation: t_home("recommendation"),
    small_1: t_home("small_1"),
    title_2: t_home("title_2"),
    p_1: t_home("p_1"),
    empty_recommendation: t_home("empty_recommendation"),
  };

  return <BannerSearch translations={translations} />;
};

export default BannerSearch_index;
