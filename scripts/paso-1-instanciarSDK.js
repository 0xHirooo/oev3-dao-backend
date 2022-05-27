import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import 'dotenv/config';

if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === ""){
    console.log("PRIVATE_KEY no encontrada");
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === ""){
    console.log("WALLET_ADDRESS no encontrada");
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === ""){
    console.log("ALCHEMY_API_URL no encontrada");
}

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY,
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL)
    )
);

(async () => {
    try{
     const address = await sdk.getSigner().getAddress()
     console.log("SDK instanciado por: ", address );
    }catch(err) {
        console.error("Hubo un error al instanciar SDK",err);
        process.exit(1);
    }
})();

export default sdk;