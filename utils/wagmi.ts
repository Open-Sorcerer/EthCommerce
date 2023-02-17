import { createClient, configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const mantleChain = {
  id: 5001,
  name: "Mantle",
  network: "Mantle",
  iconUrl: "mantle_logo.png",
  iconBackground: "#000",
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

const firechain = {
  id: 997,
  name: "5ire",
  network: "5ireChain",
  nativeCurrency: {
    decimals: 18,
    name: "5ire",
    symbol: "5ire",
  },
  rpcUrls: {
    default: { http: ["https://chain-node.5ire.network"] },
    public: { http: ["https://chain-node.5ire.network"] },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [firechain, polygonMumbai],
  [publicProvider()]
);

export const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
});
