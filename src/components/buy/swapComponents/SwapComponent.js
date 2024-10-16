/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import Exchange from "../exchange/Exchange";
import SettingsModal from "../settingsModal/SettingsModal";
import styles from "./SwapComponent.module.css";
import MetaMaskButton from "../metaMaskButtom/MetaMaskButton";
import { Link } from "@/navigation";
import {
  ABI_ROUTER_UNIVERSAL_TEST,
  BNB_TESTNET_PARAMS,
  ROUTER_UNIVERSAL_TEST,
  TRC_TEST_CONTRACT,
} from "../../../../data/data_exchange";
import { useSelector } from "react-redux";
import AddLiquidity from "../liquidity/AddLiquidity";

const tokenAddress = TRC_TEST_CONTRACT;
const networkParams = BNB_TESTNET_PARAMS;

const routerAbi = ABI_ROUTER_UNIVERSAL_TEST;
const routerAddress = ROUTER_UNIVERSAL_TEST;

const SwapComponent = () => {
  const { account, amount } = useSelector((state) => state.balance);

  const [contract, setContract] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  /* *********** web3 Instance **************** */
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);

      const routerInstance = new web3Instance.eth.Contract(
        routerAbi,
        routerAddress
      );

      setWeb3(web3Instance);
      setContract(routerInstance);

      window.ethereum
        .request({
          method: "wallet_addEthereumChain",
          params: networkParams,
        })
        .catch((error) =>
          console.error("Error adding BSC to MetaMask:", error)
        );
    } else {
      console.log("MetaMask not found");
    }
  }, []);

  const handleSwap = async () => {
    if (!contract || !account || !amount) {
      console.error("Please connect wallet and enter an amount");
      return;
    }

    const amountOutMin = "0"; // Cambia esto según tus necesidades
    const path = [
      web3.utils.toChecksumAddress(
        "0x0000000000000000000000000000000000000000"
      ),
      tokenAddress,
    ];
    const to = account;
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now
    const value = ethers.utils.parseUnits(amount, "ether");

    try {
      await contract.methods
        .swapExactETHForTokens(amountOutMin, path, to, deadline)
        .send({
          from: account,
          value: value.toString(),
          gas: 200000,
        });
      console.log("Swap successful");
    } catch (error) {
      console.error("Swap failed", error);
    }
  };

  const handleSettingsOpen = () => {
    setIsSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.limit}>
        <small>Comprar</small>
        <h2>Comprar TRC</h2>

        <p className={styles.steps}>
          <strong>Paso 1: </strong> Deberás tener instalado MetaMask, con saldo
          en BNB, para poder comprar TRC. Si no sabes como puedes ir a la
          sección <Link href={"/tutorials"}>Tutoriales</Link>.
        </p>
        <p className={styles.steps}>
          <strong>Paso 2: </strong> Preciosa el botón Conectar con Metamask.
        </p>
        <p className={styles.steps}>
          <strong>Paso 3: </strong>Coloca el monto de cuantos BNB quieres
          cambiar por TRC, y luego pulsa el botón &quot;COMPRAR&quot;.
        </p>
        <MetaMaskButton web3={web3} />
        <Exchange
          web3={web3}
          contract={contract}
          handleSwap={handleSwap}
          handleSettingsOpen={handleSettingsOpen}
        />
        <SettingsModal isOpen={isSettingsOpen} onClose={handleSettingsClose} />
        <AddLiquidity web3={web3} />
      </div>
    </div>
  );
};

export default SwapComponent;
