import { FC } from 'react';
import { useAccount } from 'wagmi';
import { Connect, Demo } from './components';

const App: FC = () => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <Connect />;
  }

  return <Demo />;
};

export default App;
