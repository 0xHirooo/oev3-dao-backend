import { ethers } from "ethers";
import sdk from "./paso-1-instanciarSDK.js";

(async () => {
 try{
  const editionDropAddress = await sdk.deployer.deployEditionDrop({
    name:"Oev3DAO",
    description:"La DAO organizadora de eventos",
    image:"https://ipfs.io/ipfs/QmazNdgoXkEk34TfB6kKPzsZKnkduLReFDeXQM2ys4134g?filename=Proyecto%20Dao%20-%20haiiro_hirooo%20-%20Web3esLogo%20(3).png",
    primary_sale_recipient: ethers.constants.AddressZero

  });

 const editionDrop = sdk.getEditionDrop(editionDropAddress);
 const metadata = await editionDrop.metadata.get();

 console.log("Contrato de EditionDrop deployado en: " , editionDropAddress);
 console.log("Metadata del editionDrop: ",metadata);

 }catch(err) {
  console.error("Error al deployar el contrato del editionDrop", err);
 }
})();