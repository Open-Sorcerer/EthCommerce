export const MUMBAI_FACTORY_CONTRACT_ADDRESS =
  "0xFd4237fcE63743e37B107702dc71dFb3603FdaD5";
export const MANTLE_FACTORY_CONTRACT_ADDRESS =
  "0xD0B8a123377C79eC69a63885485eC5AB202960b8";
export const HYPERSPACE_FACTORY_CONTRACT_ADDRESS =
  "0xC651cda1575c6da36C43751cAaC30f757b96f8eC";
export const GOERLI_FACTORY_CONTRACT_ADDRESS =
  "0xA849881e87a7C686740c382701b627E46C8a0384";

export const FACTORY_CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_factoryCourseOwner", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "NOT_ENOUGH_BALANCE", type: "error" },
  { inputs: [], name: "ONLY_OWNER_CAN_CALL_FUNCTION", type: "error" },
  { inputs: [], name: "TRANSFER_FAILED", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "uri", type: "string" },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "factoryContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "courseAddress",
        type: "address",
      },
    ],
    name: "CreateNewCourse",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "withdrawAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawMoney",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "allCourses",
    outputs: [
      { internalType: "string", name: "uri", type: "string" },
      { internalType: "uint256", name: "supply", type: "uint256" },
      { internalType: "uint256", name: "nftPrice", type: "uint256" },
      {
        internalType: "address",
        name: "factoryCourseAddress",
        type: "address",
      },
      { internalType: "address", name: "factoryCourseOwner", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_uri", type: "string" },
      { internalType: "uint256", name: "_supply", type: "uint256" },
      { internalType: "uint256", name: "_nftPrice", type: "uint256" },
      { internalType: "address", name: "_creatorAddress", type: "address" },
    ],
    name: "createCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddressOfFactoryContract",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddressOfFactoryCourseOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_creatorAddress", type: "address" },
    ],
    name: "getSearchByAddress",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numOfCourse",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "searchByAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "address", name: "_withdrawAddress", type: "address" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

export const HARSH_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nftPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_creatorAddress",
        type: "address",
      },
    ],
    name: "createCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryCourseOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NOT_ENOUGH_BALANCE",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_OWNER_CAN_CALL_FUNCTION",
    type: "error",
  },
  {
    inputs: [],
    name: "TRANSFER_FAILED",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "factoryContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "courseAddress",
        type: "address",
      },
    ],
    name: "CreateNewCourse",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "withdrawAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawMoney",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_withdrawAddress",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allCourses",
    outputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nftPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "factoryCourseAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "factoryCourseOwner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddressOfFactoryContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddressOfFactoryCourseOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creatorAddress",
        type: "address",
      },
    ],
    name: "getSearchByAddress",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numOfCourse",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "searchByAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
