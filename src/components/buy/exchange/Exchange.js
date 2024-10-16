"use client";
import { useDispatch, useSelector } from "react-redux";
import { setAmountBNB, setAmountTRC } from "@/redux/balanceSlice";
import styles from "./Exchange.module.css";
import { IoMdSettings } from "react-icons/io";
import Web3 from "web3";
import {
  BNB_TEST_CONTRACT,
  TRC_TEST_CONTRACT,
} from "../../../../data/data_exchange";

const bnbAddress = Web3.utils.toChecksumAddress(BNB_TEST_CONTRACT);
const tokenAddress = Web3.utils.toChecksumAddress(TRC_TEST_CONTRACT);

const Exchange = ({ web3, contract, handleSwap, handleSettingsOpen }) => {
  addBscTestnet();
  const dispatch = useDispatch();
  const { account, tokenBalance, bnbBalance, amountBNB, amountTRC } =
    useSelector((state) => state.balance);

  const handleBnbChange = async (e) => {
    const newValue = e.target.value;
    dispatch(setAmountBNB(newValue));
    if (web3 && account && newValue) {
      try {
        const amountIn = web3.utils.toWei(newValue, "ether");
        const path = [bnbAddress, tokenAddress];

        const amountOut = await contract.methods
          .getAmountOut(amountIn, path) // esta funcion no existe en smart router
          .call();
        const trcAmount = web3.utils.fromWei(amountOut, "ether");
        dispatch(setAmountTRC(trcAmount));
      } catch (error) {
        console.error("Error getting TRC estimate:", error);
      }
    } else {
      dispatch(setAmountTRC(0));
    }
  };

  return (
    <div className={styles.exchange}>
      <h2 className={styles.title}>Comprar TRC</h2>
      <div className={styles.section}>
        <div className={styles.label_wrapper}>
          <label className={styles.label}>BNB</label>
          <span className={styles.balance}>{`Balance ${
            bnbBalance?.toFixed(6) || 0
          }`}</span>
        </div>
        <input
          type="number"
          value={amountBNB}
          onChange={handleBnbChange}
          className={styles.input}
        />
        <div className={styles.label_wrapper}>
          <button className={styles.percentage}>25%</button>
          <button className={styles.percentage}>50%</button>
          <button className={styles.percentage}>75%</button>
          <button className={styles.percentage}>100%</button>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.label_wrapper}>
          <label className={styles.label}>TRC</label>
          <span className={styles.balance}>{`Balance ${
            tokenBalance?.balance || 0
          }`}</span>
        </div>
        <input
          type="number"
          className={styles.input}
          value={amountTRC}
          disabled
        />
      </div>
      <button onClick={handleSwap} className={styles.swapButton}>
        Comprar
      </button>
      <button onClick={handleSettingsOpen} className={styles.settingsButton}>
        <IoMdSettings />
      </button>
    </div>
  );
};

export default Exchange;
