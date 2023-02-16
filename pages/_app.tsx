import type { AppProps } from "next/app";
import { useState } from "react";

import { alchemyProvider } from "wagmi/providers/alchemy";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { Layout } from "../components";
import "../styles/globals.css";
import { polygon } from "wagmi/chains";

import NextProgress from "next-progress";
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { Chain } from "wagmi";

const mantleChain = {
  id: 5001,
  name: "Mantle",
  network: "Mantle",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "BIT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.mantle.xyz"],
    },
    public: {
      http: ["https://rpc.testnet.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer Testnet",
      url: "https://explorer.testnet.mantle.xyz",
    },
  },
  testnet: true,
};

const { provider, chains } = configureChains(
  [mantleChain],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <NextProgress options={{ color: "#bff22d", showSpinner: false }} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );
}
