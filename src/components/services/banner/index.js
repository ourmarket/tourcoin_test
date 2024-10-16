import { Banner } from "./Banner";
import { useTranslations } from "next-intl";

export const Banner_index = () => {
  const t = useTranslations("banner_services");
  const sub_title = t.rich("sub_title", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  return <Banner sub_title={sub_title} title={t("title")} />;
};
