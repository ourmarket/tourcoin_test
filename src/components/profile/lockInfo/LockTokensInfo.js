/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useReadContract, useWriteContract } from "wagmi";
import styles from "./lockInfo.module.css";
import { useEffect, useState } from "react";
import { formatUnits } from "viem";
import { LOCK_TEST, LOCK_TEST_ABI } from "../../../../data/data_exchange";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LockCard = ({ lock }) => {
  const { writeContractAsync, isSuccess } = useWriteContract();
  const [hashData, setHashData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUnlock = async () => {
    setIsLoading(true);
    setError(null);

    if (!lock.isLocked) {
      console.log(lock);
      try {
        const unlockTx = await writeContractAsync({
          address: LOCK_TEST,
          abi: LOCK_TEST_ABI,
          functionName: "unlockTokens",
          args: [lock.id],
        });
        console.log(unlockTx);
        setHashData(unlockTx);
      } catch (error) {
        console.error("Error al desbloquear los tokens:", error);
        setError("Hubo un error al bloquear los tokens");

        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Transacción enviada con éxito!");
    }
  }, [isSuccess]);

  // Monitorear cambios en la visibilidad de la página
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setHashData(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div key={lock.key} className={styles.info_container}>
      <ToastContainer position="top-right" autoClose={5000} />
      <label className={styles.label}>Cantidad</label>
      <div className={styles.inputField}>{lock.amount}</div>
      <label className={styles.label}>Tiempo Bloqueado</label>
      <div className={styles.inputField}>{lock.period}</div>
      <label className={styles.label}>Intereses</label>
      <div className={styles.inputField}>{lock.interest}</div>
      <label className={styles.label}>Fecha de desbloqueo</label>
      <div className={styles.inputField}>{lock.unlockDate}</div>
      <label className={styles.label}>Total con intereses</label>
      <div className={styles.inputField}>{lock.totalAmount}</div>
      {lock.isLocked && (
        <button className={styles.button} disabled={true}>
          Bloqueado
        </button>
      )}
      {!lock.isLocked && (
        <button
          className={styles.button}
          onClick={handleUnlock}
          disabled={isLoading}
        >
          {isLoading ? "Procesando..." : "Desbloquear"}
        </button>
      )}
      {hashData && (
        <a
          href={`${process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL}${hashData}`}
          target="_blank"
          style={{
            color: "greenyellow",
            textAlign: "center",
            marginTop: "15px",
            display: "block",
          }}
        >
          Ver en el explorador de bloques
        </a>
      )}
    </div>
  );
};

const LockTokensInfo = ({ address }) => {
  const timeLock = ["1 minuto", "5 minutos", "10 minutos"];
  const [lockInfo, setLockInfo] = useState([]);
  const { data, isFetched, error } = useReadContract({
    address: LOCK_TEST,
    abi: LOCK_TEST_ABI,
    functionName: "getLockInfoAll",
    args: [address],
  });

  console.log(isFetched);
  console.log(data);
  console.log(error);

  useEffect(() => {
    if (data && data.length > 0) {
      const formattedLockInfo = data.map((lock, index) => {
        const total =
          +formatUnits(lock.amount, 18) + +formatUnits(lock.interest, 18);

        const isLocked = new Date(Number(lock.unlockDate) * 1000) > new Date();

        return {
          id: formatUnits(lock.id, 0),
          amount: formatUnits(lock.amount, 18),
          interest: formatUnits(lock.interest, 18),
          unlockDate:
            lock.unlockDate == 0
              ? 0
              : new Date(Number(lock.unlockDate) * 1000).toLocaleString(),
          period: timeLock[lock.period],
          totalAmount: total,
          key: `lock-${index}`, // Asignar una clave única para cada bloqueo
          isLocked, // Estado de bloqueo basado en la fecha de desbloqueo
        };
      });
      setLockInfo(formattedLockInfo);
    }
  }, [data]);

  return (
    <>
      {lockInfo.length === 0 && (
        <p style={{ color: "white" }}>Todavía no tienes tokens bloqueados</p>
      )}
      {lockInfo.length > 0 &&
        lockInfo.map((lock) => <LockCard key={lock.key} lock={lock} />)}
    </>
  );
};

export default LockTokensInfo;
