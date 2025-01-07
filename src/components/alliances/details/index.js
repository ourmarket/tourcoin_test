import { useTranslations } from "next-intl";
import DetailsFetch from "./DetailsFetch";

export const Details_index = () => {
  const t = useTranslations("section_1_services_rooms");
  const t1 = useTranslations("alliance_pay");
  const t2 = useTranslations("PaymentModal");

  const consult = t("consult");
  const airbnb = t("airbnb");

  const pay = t1("pay");
  const pay_p = t1("pay_p");
  const label_1 = t1("label_1");
  const label_2 = t1("label_2");
  const label_3 = t1("label_3");
  const label_4 = t1("label_4");
  const pay_btn = t1("pay_btn");
  const error_pay = t1("error");

  const title = t2("title");
  const sent_to = t2("sent_to");
  const pay_btn_modal = t2("pay_btn");
  const loading = t2("loading");
  const send = t2("send");
  const receipt_modal = t2("receipt");
  const BscScan = t2("BscScan");

  const translations = {
    consult,
    airbnb,
    pay,
    pay_p,
    label_1,
    label_2,
    label_3,
    label_4,
    pay_btn,
    error_pay,
    title,
    sent_to,
    pay_btn_modal,
    loading,
    send,
    receipt_modal,
    BscScan,
  };

  return <DetailsFetch translations={translations} />;
};
