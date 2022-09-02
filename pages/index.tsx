import type { NextPage } from "next";
import { Button  } from "../components";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

const Home: NextPage = () => {
  const { config } = usePrepareContractWrite({
    addressOrName: '0xaf0326d92b97df1221759476b072abfd8084f9be',
    contractInterface: ['function mint()'],
    functionName: 'mint',  
  });

  const { write } = useContractWrite(config);
  
  return (
    <div className="grid h-screen place-items-center">
      <ConnectButton />        
      <Button 
        disabled={!write} 
        onClick={() => write?.()}
      >
        Mint
      </Button>
    </div>   
  );
};

export default Home;
