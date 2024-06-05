import { FC } from 'react';
import {
  BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import { Account } from '../Account';
import { FAUCET_ABI } from '../../abi';

const Demo: FC = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const mintHandler = async () => {
    writeContract({
      address: '0x632C855E22dFD82B0A6b399ACF8b92CB18E17FeE',
      abi: FAUCET_ABI,
      functionName: 'giveMeTokens',
      args: [],
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Account />
      </div>
      <div>
        <button type="button" onClick={mintHandler} disabled={isPending}>
          {isPending ? 'Confirming...' : 'Mint'}
        </button>
        <div style={{ marginTop: 20 }}>
          {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
        </div>
        <div style={{ marginTop: 20 }}>
          {error && (
            <div>
              Error: {(error as BaseError).shortMessage || error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Demo };
