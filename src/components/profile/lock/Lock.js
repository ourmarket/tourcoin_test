"use client";
import { useEffect, useState } from "react";
import { useWriteContract, useAccount } from "wagmi";
import { parseUnits } from "viem/utils";
import styles from "./lock.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LOCK_TEST,
  LOCK_TEST_ABI,
  TRC_TEST_CONTRACT,
} from "../../../../data/data_exchange";
import { interestData } from "../../../../data/interestData";
import { generateUniqueNumber } from "@/utils/idGenerator";
import axiosInstance from "@/utils/axiosInstance";

const LockTokens = () => {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hashData, setHashData] = useState(null);
  const { address } = useAccount();

  const { writeContractAsync, isSuccess } = useWriteContract();

  const handleLock = async () => {
    if (!amount || !duration || isNaN(amount)) return;
    setIsLoading(true);
    setError(null);

    try {
      const amountInWei = parseUnits(amount, 18);
      const lockId = generateUniqueNumber();

      const transferTx = await writeContractAsync({
        address: TRC_TEST_CONTRACT,
        abi: LOCK_TEST_ABI,
        functionName: "transfer",
        args: [LOCK_TEST, amountInWei],
      });

      console.log("Transfer transaction:", transferTx);

      const lockTx = await writeContractAsync({
        address: LOCK_TEST,
        abi: LOCK_TEST_ABI,
        functionName: "lockTokens",
        args: [amountInWei, duration, lockId],
      });

      console.log("Lock transaction:", lockTx);

      // Usamos interestData para obtener el tiempo de bloqueo
      const lockInfo = interestData.find(
        (item) => item.durationCode === +duration
      );
      const unlockDate = new Date(Date.now() + lockInfo.timeLock).toISOString();

      const data = {
        lockId,
        userWallet: address,
        lockAddress: LOCK_TEST,
        amount: +amount,
        interest: interestData.find((item) => item.durationCode === +duration)
          ?.interest,
        durationText: interestData.find(
          (item) => item.durationCode === +duration
        )?.durationText,
        durationCode: +duration,
        unlockDate,
      };

      console.log(data);

      const res1 = await axiosInstance.get("/auth/csrf-token");

      const res2 = await axiosInstance.post("/locks", data);

      console.log(res1);
      console.log(res2);

      setHashData(lockTx);
    } catch (error) {
      console.error(error);
      setError("Hubo un error al bloquear los tokens");
      toast.error("Hubo un error al bloquear los tokens");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Transacción enviada con éxito!");
    }
  }, [isSuccess]);

  return (
    <div className={styles.container}>
      <ToastContainer position="top-right" autoClose={5000} />
      <h2>Bloqueo de TRC</h2>
      <label className={styles.label}>Cantidad de TRC a bloquear</label>
      <input
        type="number"
        className={styles.inputField}
        placeholder="Cantidad de tokens"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={isLoading}
      />
      <label className={styles.label}>Tiempo de bloqueo</label>
      <select
        className={styles.inputField}
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        disabled={isLoading}
      >
        <option value="0">1 minuto</option>
        <option value="1">5 minutos</option>
        <option value="2">10 minutos</option>
      </select>
      <button
        className={styles.button}
        onClick={handleLock}
        disabled={isLoading}
      >
        {isLoading ? "Procesando..." : "Bloquear Tokens"}
      </button>
      {hashData && (
        <a
          href={`${process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL}${hashData}`}
          target="_blank"
          style={{
            color: "greenyellow",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Ver en el explorador de bloques
        </a>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default LockTokens;
