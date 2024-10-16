import { useTranslations } from "next-intl";
import { Section1 } from "./Section1";

export const Section1_index = () => {
  const t = useTranslations("section_1_tutorials");

  const small = t.rich("small", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const h2 = t.rich("h2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const p_1 = t.rich("p_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const h2_1 = t.rich("h2_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title1 = t.rich("title_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title2 = t.rich("title_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title3 = t.rich("title_3", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const title4 = t.rich("title_4", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const text_1 = t.rich("text_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const text_2 = t.rich("text_2", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_3 = t.rich("text_3", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_4 = t.rich("text_4", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const button = t("button");

  const video_1 = t("video_1");
  const video_2 = t("video_2");
  const video_3 = t("video_3");
  const video_4 = t("video_4");

  const translations = {
    small,
    h2,
    h2_1,
    p_1,
    title1,
    title2,
    title3,
    title4,
    text_1,
    text_2,
    text_3,
    text_4,
    button,
    video_1,
    video_2,
    video_3,
    video_4,
  };

  return <Section1 translations={translations} />;
};
