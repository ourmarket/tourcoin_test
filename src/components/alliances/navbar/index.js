import { useTranslations } from "next-intl";
import { NavbarServices } from "./NavbarServices";

export const NavbarServices_index = () => {
  const t_nav = useTranslations("section_1_services_nav");

  const li_1 = t_nav("li_1");
  const li_2 = t_nav("li_2");
  const li_3 = t_nav("li_3");
  const li_4 = t_nav("li_4");

  const translations = {
    li_1,
    li_2,
    li_3,
    li_4,
  };

  return <NavbarServices translations={translations} />;
};
