"use client";
import styles from "./details.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetBalance } from "@/hooks/useGetBalance";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ABI_TRC, TRC_CONTRACT } from "../../../../data/data_exchange";
import { decimalLimit } from "@/utils/decimalLimit";
import { parseUnits } from "viem/utils";
import { useAccount, useWriteContract } from "wagmi";
import { estimateGas } from "@wagmi/core";
import { config } from "@/context/Web3ModalProvider_new";
import PaymentModal from "./PaymentModal";
import LoadingModal from "./LoadingModal";
import SuccessModal from "./SuccessModal";
import { Link } from "@/navigation";

const PaidTrc = ({ translations, wallet, alliance }) => {
  const { pay, pay_p, label_1, label_2, label_3, label_4, pay_btn, error_pay } =
    translations;

  useGetBalance();
  const { address } = useAccount();
  const { amountTRC, TRCPrice } = useSelector((state) => state.balance);

  const [quantityTRC, setQuantityTRC] = useState(0);
  const [quantityLocal, setQuantityLocal] = useState(undefined);
  const [valueARS, setValueARS] = useState(0);
  const [valueBRL, setValueBRL] = useState(0);
  const [localCurrency, setLocalCurrency] = useState("ARS");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [paymentModal, setPaymentModal] = useState(false);

  const handleValueChange = (newValue) => {
    if (localCurrency === "ARS" && newValue >= 0) {
      setQuantityLocal(newValue);
      setQuantityTRC(decimalLimit(newValue / valueARS / TRCPrice));
    }
    if (localCurrency === "BRL" && newValue >= 0) {
      setQuantityLocal(newValue);
      setQuantityTRC(decimalLimit(newValue / valueBRL / TRCPrice));
    }
    if (localCurrency === "USD" && newValue >= 0) {
      setQuantityLocal(newValue);
      setQuantityTRC(decimalLimit(newValue / TRCPrice));
    }
  };
  const handleCurrencyChange = (newValue) => {
    if (newValue === "ARS") {
      setLocalCurrency(newValue);
      setQuantityTRC(decimalLimit(quantityLocal / valueARS / TRCPrice));
    }
    if (newValue === "BRL") {
      setLocalCurrency(newValue);
      setQuantityTRC(decimalLimit(quantityLocal / valueBRL / TRCPrice));
    }
    if (newValue === "USD") {
      setLocalCurrency(newValue);
      setQuantityTRC(decimalLimit(quantityLocal / TRCPrice));
    }
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://dolarapi.com/v1/dolares/cripto"
      );

      setValueARS(data.compra);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=brl"
      );

      setValueBRL(data.tether.brl);
    };

    getData();
  }, []);

  const { writeContractAsync, isSuccess } = useWriteContract();

  const handlePay = async () => {
    if (!quantityTRC || isNaN(quantityTRC)) return;
    setIsLoading(true);
    setError(null);

    try {
      const amountInWei = parseUnits(quantityTRC.toString(), 18);

      // Estimar el gas necesario para la transferencia
      const estimatedGas = await estimateGas(config, {
        address: TRC_CONTRACT,
        abi: ABI_TRC,
        functionName: "transfer",
        args: [wallet, amountInWei],
      });

      console.log(estimatedGas);

      // Agregar un margen de seguridad (por ejemplo, un 10% más)
      const gasLimit = (estimatedGas * 110n) / 100n;

      const transferTx = await writeContractAsync({
        address: TRC_CONTRACT,
        abi: ABI_TRC,
        functionName: "transfer",
        args: [wallet, amountInWei],
        gas: gasLimit,
      });

      setQuantityTRC(0);
      setReceipt(transferTx);

      console.log("Transfer transaction:", transferTx);
    } catch (error) {
      console.error(error);
      setError("Hubo un error al transferir los tokens");
      toast.error(error_pay);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {address && (
        <div className={styles.payment}>
          <ToastContainer position="top-right" autoClose={5000} />
          {paymentModal && (
            <PaymentModal
              quantityTRC={quantityTRC}
              quantityLocal={quantityLocal}
              localCurrency={localCurrency}
              alliance={alliance}
              setPaymentModal={setPaymentModal}
              handlePay={handlePay}
              translations={translations}
            />
          )}
          {isLoading && (
            <LoadingModal
              quantityTRC={quantityTRC}
              alliance={alliance}
              setIsLoading={setIsLoading}
              translations={translations}
            />
          )}
          {receipt && (
            <SuccessModal
              receipt={receipt}
              setReceipt={setReceipt}
              translations={translations}
            />
          )}
          <h3>{pay}</h3>
          <p>{pay_p}</p>

          <div className={styles.input}>
            <label>{label_1}</label>
            <select
              onChange={(e) => handleCurrencyChange(e.target.value)}
              value={localCurrency}
            >
              <option value="ARS">ARS</option>
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div className={styles.input}>
            <label>{label_2}</label>
            <input
              type="number"
              placeholder="0.00"
              value={quantityLocal}
              onChange={(e) => handleValueChange(e.target.value)}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.row_50}>
              <label>{label_3}</label>
              <input
                disabled={true}
                type="text"
                placeholder="0.00"
                value={`${quantityTRC} TRC`}
              />
            </div>
            <div className={styles.row_50}>
              <label>{label_4}</label>
              <input
                disabled={true}
                type="text"
                placeholder="0.00"
                value={`${amountTRC} TRC`}
              />
            </div>
          </div>

          <button
            className={styles.btn}
            onClick={() => setPaymentModal(true)}
            disabled={quantityLocal <= 0 || !quantityLocal ? true : false}
          >
            {pay_btn}
          </button>
        </div>
      )}
      {!address && (
        <div className={styles.payment}>
          <h3>{pay}</h3>
          <p>{pay_p}</p>
          <button className={styles.btn}>
            <Link href={"/profile"}>Conecta tu wallet</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default PaidTrc;
