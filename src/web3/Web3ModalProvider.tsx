import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';

import { WagmiProvider } from 'wagmi';
import { sepolia } from 'wagmi/chains';

interface Web3ModalProviderProps {
  children: JSX.Element | JSX.Element[];
}

const queryClient = new QueryClient();

const WC_PROJECT_ID = (import.meta.env.VITE_WC_PROJECT_ID as string)!;

const metadata = {
  name: 'Web3Modal Example',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [sepolia] as const;

const config = defaultWagmiConfig({
  chains,
  projectId: WC_PROJECT_ID,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId: WC_PROJECT_ID,
  enableAnalytics: false,
  enableOnramp: false,
});

const Web3ModalProvider: FC<Web3ModalProviderProps> = (props) => {
  const { children } = props;
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export { Web3ModalProvider };
