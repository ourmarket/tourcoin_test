"use client";
import React, { useState } from "react";
import {
  ABI_ROUTER_UNIVERSAL_TEST,
  ABI_TRC_TEST,
  ROUTER_UNIVERSAL_TEST,
} from "../../../../data/data_exchange";
import styles from "./AddLiquidity.module.css";

const AddLiquidity = ({ web3 }) => {
  const [tokenAddress, setTokenAddress] = useState(
    "0x6d33eBBcCFCA42A237F6EAbdfde3E6E577525250"
  );
  const [bnbAmount, setBnbAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  const getPancakeSwapRouter = (web3, address) => {
    return new web3.eth.Contract(ABI_ROUTER_UNIVERSAL_TEST, address);
  };

  const handleAddLiquidity = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0]; //ok
      const router = getPancakeSwapRouter(web3, ROUTER_UNIVERSAL_TEST);

      console.log(router);

      const tokenAmountWei = web3.utils.toWei(tokenAmount, "ether"); // Adjust the conversion if your token has different decimals
      const bnbAmountWei = web3.utils.toWei(bnbAmount, "ether");

      const tokenContract = new web3.eth.Contract(ABI_TRC_TEST, tokenAddress);

      // Approve the router to spend the token
      await tokenContract.methods
        .approve(router.options.address, tokenAmountWei)
        .send({ from: account });

      const tx = await router.methods
        .addLiquidity(
          tokenAddress,
          tokenAmountWei,
          0, // slippage is set to 0 for simplicity, you may want to adjust this
          0, // slippage is set to 0 for simplicity, you may want to adjust this
          account,
          Math.floor(Date.now() / 1000) + 60 * 20
        )
        .send({
          from: account,
          value: bnbAmountWei,
        });

      alert("Liquidity added successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding liquidity.");
    }
  };

  return (
    <div className={styles.addLiquidity}>
      <h2>Añadir Liquidez</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddLiquidity();
        }}
      >
        <div className={styles.inputGroup}>
          <label>Dirección del Token:</label>
          <input
            type="text"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Cantidad de Token:</label>
          <input
            type="text"
            value={tokenAmount}
            onChange={(e) => setTokenAmount(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Cantidad de BNB:</label>
          <input
            type="text"
            value={bnbAmount}
            onChange={(e) => setBnbAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.btnComprar}>
          Añadir Liquidez
        </button>
      </form>
    </div>
  );
};

export default AddLiquidity;
