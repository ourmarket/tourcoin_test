/* eslint-disable react-hooks/exhaustive-deps */
// components/MetaMaskButton.js
import BigNumber from "bignumber.js";
import { useDispatch, useSelector } from "react-redux";

import styles from "./metaMaskButton.module.css";
import {
  clearBalances,
  setAccount,
  setBnbBalance,
  setTokenBalance,
} from "@/redux/balanceSlice";
import {
  ABI_TRC_TEST,
  TRC_TEST_CONTRACT,
} from "../../../../data/data_exchange";

const tokenAddress = TRC_TEST_CONTRACT;
const tokenABI = ABI_TRC_TEST;

const MetaMaskButton = ({ web3 }) => {
  const dispatch = useDispatch();
  const { account, tokenBalance, bnbBalance } = useSelector(
    (state) => state.balance
  );

  const connectMetaMask = async () => {
    if (web3) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        dispatch(setAccount(account));
        getTokenBalance(account);
        getBnbBalance(account);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    }
  };

  const disconnectMetaMask = () => {
    dispatch(clearBalances());
  };

  const getTokenBalance = async (account) => {
    const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
    const balance = await tokenContract.methods.balanceOf(account).call();
    const decimals = await tokenContract.methods.decimals().call();
    const symbol = await tokenContract.methods.symbol().call();

    const balanceBN = new BigNumber(balance);
    const decimalsBN = new BigNumber(10).pow(decimals);
    const adjustedBalance = balanceBN.dividedBy(decimalsBN);

    dispatch(
      setTokenBalance({
        // muestra solo 6 valores en la parte decimal
        balance: +adjustedBalance.toFixed(6),
        symbol,
      })
    );
  };

  const getBnbBalance = async (account) => {
    const balance = await web3.eth.getBalance(account);
    const balanceBN = web3.utils.fromWei(balance, "ether");
    dispatch(setBnbBalance(+balanceBN));
  };

  return (
    <section className={styles.container}>
      {account ? (
        <div className={styles.balance}>
          <h4 className={styles.label}>Billetera(MetaMask)</h4>
          <p className={styles.data_field}> {account}</p>
          <h4 className={styles.label}>TRC</h4>
          {tokenBalance ? (
            <p className={styles.data_field}>{tokenBalance.balance}</p>
          ) : (
            <p>Loading token balance...</p>
          )}
          <h4 className={styles.label}>BNB</h4>
          {bnbBalance !== null ? (
            <p className={styles.data_field}>{bnbBalance.toFixed(6)}</p>
          ) : (
            <p>Loading BNB balance...</p>
          )}
          <button
            className={styles.btn_disconnect}
            onClick={disconnectMetaMask}
          >
            Desconectar de MetaMask
          </button>
        </div>
      ) : (
        <button className={styles.btn_connect} onClick={connectMetaMask}>
          Conectar con MetaMask
        </button>
      )}
    </section>
  );
};

export default MetaMaskButton;
