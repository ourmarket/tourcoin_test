"use client";
import { config } from "@/config/wagmi";
import { WagmiProvider } from "wagmi";
import MetaMaskButtonWagmi from "./metaMaskButtomWagmi/MetaMaskButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";

const queryClient = new QueryClient();

const Buy_index = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.post(
        "https://api.coinbrain.com/public/coin-info",
        {
          56: [
            "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            "0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A",
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);

      setLoading(true);
      setError(false);
      try {
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <MetaMaskButtonWagmi />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Buy_index;
