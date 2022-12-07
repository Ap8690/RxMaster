import Web3 from "web3";
import { assetAbi, assetAddress, nftAbi, nftAddress } from "./config";

export const connectWallet = async() => {
   // return await window.ethereum.request({ methods: 'eth_requestAccounts' });
   if(window.ethereum){
   const web3 = new Web3(Web3.givenProvider)
   const addresses = await web3.eth.getAccounts()
   localStorage.setItem("address",addresses[0])
   return addresses[0]
   }
}

const getWeb3 = () =>{
   return new Web3(Web3.givenProvider)
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
      return await nftContract.methods.whiteListStart().call()
   },
   whiteListEnd : async() =>{
      const nftContract = nftInstance()
      return await nftContract.methods.whiteListEnd().call()
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
   mint : async(assetId,address) =>{
      const nftContract = assetInstance()
      // const price = getWeb3().utils.toWei(totalPrice)
      return await nftContract.methods.mintGiveaway(assetId,address).send({
         from: address
      })
   },
}
