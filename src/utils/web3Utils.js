import { toast } from "react-toastify";
import Web3 from "web3";
import { assetAbi, assetAddress, nftAbi, nftAddress } from "./config";

export const connectWallet = async() => {
   try {
      console.log(typeof window.navigator.userAgent,"device")
      if(!window?.ethereum){
         if(window.navigator.userAgent.match(/android|iphone|kindle|ipad/i)) {
            const location = window.location;
            const url = location.href.split('://')[1]
            let metamaskAppDeepLink = "https://metamask.app.link/dapp/" + url;
            window.open(metamaskAppDeepLink)
            toast.error("Please switch to polygon testnet!")
         }
        else{
           window.open('https://metamask.io/download/', '_blank');
        }
      }
      await window?.ethereum.request({ method: 'eth_requestAccounts' });
   try {
           await ethereum?.request({
              method: "wallet_switchEthereumChain",
              params: [
                  {
                      chainId: "0x13881",
                  },
              ],
          });
  } catch (error) {
      console.log(error?.code?.toString(),"error",error?.code?.toString() === "4902")
      if (error?.code?.toString() === "4902") {
         console.log("adding")
          try {
                  await ethereum?.request({
                      method: "wallet_addEthereumChain",
                      params: [{
                        chainId: "0x13881",
                        chainName: 'Mumbai Polygon',
                        nativeCurrency: {
                          name: 'Polygon',
                          symbol: 'MATIC',
                          decimals: 18,
                        },
                        rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
                        blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
                      }],
                  });
                  connectWallet()
          } catch (addError) {
              throw new Error(addError);
          }
      } else {
          throw new Error(error);
      }
  }
   if(window.ethereum){
   const web3 = new Web3(Web3.givenProvider)
   const addresses = await web3.eth.getAccounts()
   localStorage.setItem("address",addresses[0])
   console.log("kfdhohdf")
   return addresses[0]
   }
   } catch (error) {
      console.log(error)
   }
}

const getWeb3 = () =>{
   return new Web3(Web3.givenProvider || "https://polished-evocative-layer.matic-testnet.quiknode.pro/eff92fb3750e78c45cf3e41d9ca2791a94bb73ed/")
}

export const getAccount = async() =>{
   const web3 = new Web3(Web3.givenProvider)
   return await web3.eth.getAccounts()
}

const nftInstance = () =>{
   const web3 = getWeb3()
   return new web3.eth.Contract(nftAbi,nftAddress)
}

const assetInstance = () =>{
   const web3 = getWeb3()
   return new web3.eth.Contract(assetAbi,assetAddress)
}

export const nftMint = {
   totalSupply : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.totalSupply().call()
   },
   publicPrice : async() =>{
      const nftContract = nftInstance()
      const price = await nftContract.methods.publicSalePrice().call()
      return getWeb3().utils.fromWei(price)
   },
   startTime : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.publicSaleStart().call()
   },
   endTime : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.publicSaleEnd().call()
   },
   endTime : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.publicSaleEnd().call()
   },
   balanceOf : async(address) =>{
      const nftContract = nftInstance()
      return await nftContract.methods.balanceOf(address).call()
   },
   isWhiteListed : async(address) =>{
      const nftContract = nftInstance()
      return await nftContract.methods.isWhitelisted(address).call()
   },
   whiteListPrice : async() =>{
      const nftContract = nftInstance()
      const price = await nftContract.methods.whitelistPrice().call()
      console.log(price,"price")
      return getWeb3().utils.fromWei(price)
   },
   whiteListStart : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.whitelistStart().call()
   },
   whiteListEnd : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.whitelistEnd().call()
   },
   whiteListMinted : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.whitelistMinted().call()
   },
   whiteListTotal : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.maximumWhitelistMint().call()
   },
   maxWhileListMintUser : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.maximumWhitelistMintByUser().call()
   },
   wlMintByUser : async(address) =>{
      const nftContract = nftInstance()
      return await nftContract.methods.whitelistMintByUser(address).call()
   },
   totalWhileListMintedUser : async(address) =>{
      const nftContract = nftInstance()
      return await nftContract.methods.numberMinted(address).call()
   },
   totalPublicSaleMintByUser : async(address) =>{
      const nftContract = nftInstance()
      return await nftContract.methods.publicSaleMintByUser(address).call()
   },
   mint : async(quantity,totalPrice) =>{
      const nftContract = nftInstance()
      let price = getWeb3().utils.toWei(totalPrice)
      console.log(totalPrice,price,"dhfojf")
      const address =  await getWeb3().eth.getAccounts()
      return await nftContract.methods.mint(quantity).send({
         from: address[0],
         value : price
      })
   },
}

export const assetMint = {
   assetDetails : async(assetId) =>{
      const nftContract = assetInstance()
      const asset = await nftContract.methods.asset(assetId).call()
      const assetPrice = getWeb3().utils.fromWei(asset.price)
      const data = {
         supply : asset.supply,
         minted : asset.minted,
         price : assetPrice
      }
      return data
   },
   userMinted : async(address,assetId) =>{
      const nftContract = assetInstance()
      return await nftContract.methods.freeMint(address,assetId).call()
   },
   startTime : async() =>{
      const nftContract = assetInstance()
      return await nftContract.methods.giveawayStart().call()
   },
   mint : async(assetId,address) =>{
      const nftContract = assetInstance()
      // const price = getWeb3().utils.toWei(totalPrice)
      return await nftContract.methods.mintGiveaway(assetId,address).send({
         from: address
      })
   },
}
