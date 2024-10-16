"use client";
import { useState } from "react";
import styles from "./lockInfo.module.css";
import LockTokensInfo from "./LockTokensInfo";

const GetInfoLock = ({ address }) => {
  const [getInfo, setGetInfo] = useState(false);

  return (
    <div className={styles.container}>
      <h2>Consultar TRC Bloqueados</h2>
      {!getInfo && (
        <button className={styles.button} onClick={() => setGetInfo(!getInfo)}>
          Ver Información
        </button>
      )}
      {getInfo && (
        <button
          className={styles.button}
          style={{ marginBottom: "20px" }}
          onClick={() => setGetInfo(!getInfo)}
        >
          Ocultar Información
        </button>
      )}

      {getInfo && <LockTokensInfo address={address} />}
    </div>
  );
};

export default GetInfoLock;
