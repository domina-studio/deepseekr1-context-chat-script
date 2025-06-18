
interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    isCoinbaseWallet?: boolean;
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, callback: (accounts: string[]) => void) => void;
    removeListener: (event: string, callback: (accounts: string[]) => void) => void;
  };
}
