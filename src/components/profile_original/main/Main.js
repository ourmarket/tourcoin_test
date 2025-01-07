"use client";
import Balance from "../balance/Balance";
import { useAccount, useBalance, useReadContract } from "wagmi";
import { ABI_TRC, TRC_CONTRACT } from "../../../../data/data_exchange";
import { useFetch } from "@/hooks/useFetch";
import styles from "./main.module.css";

const MainProfile = ({ translations }) => {
  const { connect } = translations;
  const { address } = useAccount();
  const { data: priceTrcData, loading: l1 } = useFetch(
    "0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A"
  );
  const { data: priceBnbData, loading: l2 } = useFetch(
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  );

  const { data: balanceTrc, isLoading: l3 } = useReadContract({
    abi: ABI_TRC,
    address: TRC_CONTRACT,
    functionName: "balanceOf",
    args: [address], //wallet, address
  });

  const { data: balanceBnb, isLoading: l4 } = useBalance({
    address,
  });

  return (
    <section className={styles.container}>
      <w3m-button balance="false" size="sm" label={connect} />
      {l1 && l2 && l3 && l4 && (
        <div className={styles.loading}>
          <span className="loader"></span>
        </div>
      )}
      {address && balanceBnb && address && priceTrcData && priceBnbData && (
        <Balance
          data={{
            address,
            balanceTrc,
            balanceBnb: balanceBnb.formatted,
          }}
          priceTrcData={priceTrcData}
          priceBnbData={priceBnbData}
        />
      )}
    </section>
  );
};

export default MainProfile;
