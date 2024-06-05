// const FAUCET_ABI = ['function giveMeTokens() external'];

const FAUCET_ABI = [
  {
    name: 'giveMeTokens',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [],
    outputs: [],
  },
];

export { FAUCET_ABI };
