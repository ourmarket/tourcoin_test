"use client";

import { createAppKit } from "@reown/appkit/react";
import { mainnet } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

import { bsc } from "viem/chains";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

// Setup queryClient
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const queryClient = new QueryClient();

const metadata = {
  //optional
  name: "AppKit",
  description: "AppKit Example",
  url: "https://example.com",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const wagmiAdapter = new WagmiAdapter({
  networks: [bsc],
  projectId,
});

export const config = wagmiAdapter.wagmiConfig;

createAppKit({
  adapters: [wagmiAdapter],
  networks: [bsc],
  defaultNetwork: bsc,
  metadata: metadata,
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

export default function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
