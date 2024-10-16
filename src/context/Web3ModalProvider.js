"use client";

/* import { config, projectId } from "@/config/web3modal";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  enableSwaps: false,
  enableOnramp: false,
  themeVariables: {
    "--w3m-accent": "#f9ba32",
    "--w3m-border-radius-master": "2px",
    "--w3m-z-index": 99999999999,
  },
});

export default function Web3ModalProvider({ children, initialState }) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
 */

/* import { createAppKit } from "@reown/appkit/react";

import { WagmiProvider } from "wagmi";
import { binanceSmartChain } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { config } from "@/config/web3modal";
import { bscTestnet, bsc } from "wagmi/chains";
import { cookieStorage, createStorage, http } from "wagmi";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) throw new Error("Project ID is not defined");

// 2. Create a metadata object - optional
const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Create Wagmi Adapter
const wagmiConfig = new WagmiAdapter({
  networks: [binanceSmartChain], // Asegúrate de que binanceSmartChain esté correctamente definido
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // Asegúrate de que projectId esté definido
  chains: [bsc, bscTestnet],
  transports: {
    [bsc.id]: http("https://binance.llamarpc.com"),
    [bscTestnet.id]: http("https://data-seed-prebsc-2-s3.bnbchain.org:8545"),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

// 4. Create modal
createAppKit({
  adapters: [wagmiConfig],
  networks: [
    binanceSmartChain,
    {
      id: "eip155:97",
      chainId: 97,
      name: "Binance Smart Chain Testnet",
      currency: "BNB",
      explorerUrl: "https://testnet.bscscan.com",
      rpcUrl: "https://data-seed-prebsc-2-s3.bnbchain.org:8545",
      chainNamespace: "eip155",
    },
  ],
  metadata,
  allowUnsupportedChain: true,
  projectId,
  features: {
    analytics: false,
    swaps: false,
    onramp: false,
    email: false,
    socials: [],
  },

  themeVariables: {
    "--w3m-accent": "#f9ba32",
    "--w3m-border-radius-master": "2px",
    "--w3m-z-index": 99999999999,
  },
});

console.log(wagmiConfig.wagmiConfig);
console.log(config);

export default function Web3ModalProvider({ children, initialState }) {
  return (
    <WagmiProvider config={wagmiConfig.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
 */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { binanceSmartChain } from "@reown/appkit/networks";
import { cookieToInitialState, WagmiProvider } from "wagmi";
import { testnet, wagmiAdapter, projectId } from "@/config/wagmiConfig";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "appkit-example-scroll",
  description: "AppKit Example - Scroll",
  url: "https://scrollapp.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [binanceSmartChain, testnet],
  defaultNetwork: binanceSmartChain,
  metadata: metadata,
  features: {
    analytics: false,
    swaps: false,
    onramp: false,
    email: false,
    socials: [],
  },
  themeVariables: {
    "--w3m-accent": "#f9ba32",
    "--w3m-border-radius-master": "2px",
    "--w3m-z-index": 99999999999,
  },
});

function Web3ModalProvider({ children, cookies }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies);

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default Web3ModalProvider;
