/* import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage, http } from "wagmi";
import { bscTestnet, bsc } from "wagmi/chains";

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

// Create wagmiConfig
const chains = [bsc, bscTestnet];
export const config = defaultWagmiConfig({
  chains,
  projectId,
  ssr: true,
  transports: {
    [bsc.id]: http("https://binance.llamarpc.com"),
    [bscTestnet.id]: http("https://data-seed-prebsc-2-s3.bnbchain.org:8545"),
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
}); */

import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage, http } from "wagmi";
import { bscTestnet, bsc } from "wagmi/chains";

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

// Create wagmiConfig
const chains = [bsc, bscTestnet];
export const config = defaultWagmiConfig({
  chains,
  projectId,
  ssr: true,
  transports: {
    [bsc.id]: http("https://binance.llamarpc.com"),
    [bscTestnet.id]: http("https://data-seed-prebsc-2-s3.bnbchain.org:8545"),
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
});
