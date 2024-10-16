"use client";
import { useAccount } from "wagmi";
import { Account } from "./Account";
import { Connect } from "./Connect";

const MetaMaskButtonWagmi = () => {
  const { isConnected } = useAccount();

  return (
    <div className="container">{isConnected ? <Account /> : <Connect />}</div>
  );
};

export default MetaMaskButtonWagmi;
