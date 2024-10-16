import { Banner } from "./Banner";
import { useTranslations } from "next-intl";

export const Banner_index = () => {
  const t = useTranslations("banner");
  const title = t.rich("title", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  return (
    <Banner title={title} button={t("button")} whitepaper={t("whitepaper")} />
  );
};
