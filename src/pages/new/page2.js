import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import React, { useEffect } from "react";
import withNoSSR from "./withNoSsr";
import { TimeSpliting, TimerDigit } from './index'
import { connectWallet, getAccount, nftMint } from "@utils/web3Utils";
import CountdownTimer from "@components/countdown/Countdown";
import MintBtn from "@components/mint-btn/MintBtn";
import { toast } from "react-toastify";
import DisBtn from "@components/mint-btn/Disabled";

const WalletConnection = ({ setConnection }) => {
  return (
    <div class="newbg">
      <div class="container">
        <div className="row col-12">
          <div className="col text-center mb-5 nlogo">
            <img src="/images/new/nlogo1.png" />
          </div>

          <div
            className="text-center mb-5"
            onClick={() => {
              setConnection(true);
            }}
          >
            <a class="nbtn1">
              <img src="/images/new/wbtn1.png" />{" "}
            </a>
          </div>

          <div className="row justify-content-between align-item-center">
            <div className="col-lg-6 col-md-6 col-sm-12 pb-5 mauto">
              <p className="cont">Contract ad:</p>
              <img class="social1" src="/images/new/social-icons.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page2 = () => {
  const [counter, setCounter] = React.useState(1);
  const [maxMint,setMaxMint] = React.useState(0)
  const [price, setPrice] = React.useState(0)
  const [address,setAddress]= React.useState('')
  const [totalSupply,setTotalSupply]= React.useState(0)
  const [isWhileList,setIsWhiteList]= React.useState(false)
  const [totalMinted,setTotalMinted]= React.useState(0)
  const [endTime,setEndTime]= React.useState(new Date("07-25-2023"))
  const [startTime,setStartTime]= React.useState(new Date("07-25-2023"))
  const [loading, setLoading] = React.useState(false)
  const [wlMintByUser, setWlMintByUser] = React.useState(0)

  const getData = async() =>{
    try {
      const address = localStorage.getItem("address")
      setAddress(address)
      const isWhiteList = await nftMint.isWhiteListed(address)
      setIsWhiteList(isWhiteList)
      const price = await nftMint.whiteListPrice()
      setPrice(price)
      const maxMint = await nftMint.maxWhileListMintUser()
      setMaxMint(maxMint)
      const total = await nftMint.whiteListTotal()
      setTotalSupply(total)
      const minted = await nftMint.whiteListMinted()
      setTotalMinted(minted)
      const time = await nftMint.whiteListStart()
      setStartTime(new Date(time*1000))
      const wlMintUser = await nftMint.wlMintByUser(address)
      console.log(maxMint,wlMintUser,"anything")
      setWlMintByUser(wlMintUser)
      const endTime = await nftMint.whiteListEnd()
      setEndTime(new Date(endTime*1000))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[loading])


  const increment = async() => {
    if (counter >= maxMint) {
      return;
    } else {
      setCounter(counter + 1);
    }
  }

  const decrement = async() => {
    if (counter <= 1) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  const mintNft =async() =>{
    try {
      setLoading(true)
      await nftMint.mint(counter,(counter*price).toString())
      setLoading(false)
      toast.success("NFT Minted Successfully!")
    } catch (error) {
      setLoading(false)
    }
  }

  
  const widthForMobile = global?.window.innerWidth && window.innerWidth < 500;

  return (
    <div class="newbg1">
      <div class="container">
        <div className="row col-12">
          <div className="col text-center mb-5 nlogo">
            <img src="/images/new/nlogo3.png" />

            <p className="page2-title text-center pt-5 mb-3">
              Mint Rx669 series Character NFT
            </p>
            <div className="row d-flex align-items-center justify-content-center">
              <div
                className="col-md-4"
                style={{ borderBottom: "2px solid red" }}
              ></div>
            </div>
          </div>

          <div className="row justify-content-between align-item-center margt50">
            <div className="col-lg-4 col-md-4 col-sm-12 mr30">
              <img className="ani1" src="/images/new/wm.png"></img>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12 pb-5">
              <div className="p-55">
                <p
                  style={{
                    color: "#fff",
                    fontSize: "26px",
                    fontWeight: 600,
                    lineHeight: "43px",
                    fontFamily: "grifterbold",
                    letterSpacing: "1px",
                  }}
                  className="mb-4"
                >
                  SALE BEGINS IN
                </p>

                <div
                  id="timer"
                  style={{
                    background: "#84381e",
                    width: "100%",
                    height: "100px",
                    border: "2px solid red",
                    position: "relative",
                    fontFamily: "BITSUMIS",
                    letterSpacing: "1px",
                  }}
                  className="mb-4"
                >
                  <div
                    style={{ height: "inherit", padding: "1.5rem 3rem" }}
                  >
                   {/* <TimerDigit value={new Date(endTime).getDay()} helperText="days" />
                    <TimeSpliting />
                    <TimerDigit value={new Date(endTime).getHours()} helperText="hours" />
                    <TimeSpliting />
                    <TimerDigit value={new Date(endTime).getMinutes()} helperText="mins" />
                    <TimeSpliting />
                    <TimerDigit value={new Date(endTime).getSeconds()} helperText="sec" /> */}
                    <CountdownTimer date={startTime} />
                  </div>
                </div>
                <div>
                  <p className="abouttxx">
                    We are not just trying to ride the Hype Train. We have been
                    doing this for our bread and butter for a little over a
                    decade now. Researching, Innovating, Building products using
                    future focussed traditional and immersive technologies.
                  </p>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ height: "inherit",margin: "10px", padding: "5px" }}
                >
                  <div
                    // className="d-flex justify-content-around"
                    style={{ width: "inherit", flex: 1 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        minWidth: "100px",
                      }}
                    >
                      <p className="cxtxt" style={widthForMobile ? null : {flex: 1}}>Price NFT</p>
                      <div className="ctbox" >{(counter*price).toFixed(4)}</div>
                    </div>
                  </div>
                  <div style={{ width: "inherit", flex: 1, }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        minWidth: "200px",
                      }}
                    >
                      <p className="cxtxt" style={widthForMobile ? null : {flex: 1}}>Total Quantity</p>
                      <div className="ctbox" >
                        <div class="d-flex">
                          <span class="minus" onClick={() => decrement()}>
                            -
                          </span>
                          <input class="dytxt" type="text" value={counter} />
                          <span class="plus" onClick={() => increment()}>
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex justify-content-around align-items-center"
                  style={{ height: "inherit", margin: "5px", padding: "5px",   }}
                >
                  <div
                    // className="d-flex justify-content-around"
                    style={{ width: "inherit", flex: 1, }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        minWidth: "100px",
                      }}
                    >
                      <p className="cxtxt" style={widthForMobile ? null : {flex: 1}}>Remaining NFT</p>
                      <div className="ctbox" >{totalSupply-totalMinted}</div>
                    </div>
                  </div>

                  <div
                    // className="d-flex justify-content-around"
                    style={{ width: "inherit", flex: 1, }}
                  >
                  <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        minWidth: "200px",
                      }}
                    >
                    
                    <p className="cxtxt" style={widthForMobile ? null : {flex: 1}}>Total</p>
                    <div className="ctbox" >{totalSupply}</div>
                    </div>
                  </div>
                </div>
                {/* <div className="row align-item-center">
                  <div className="col-6 mt-4">
                    <div className="opbox">
                      <p className="cxtxt">Price NFT</p>
                      <div className="ctbox">400</div>
                    </div>
                  </div>
                  <div className="col-6 mt-4">
                    <div className="opbox">
                      <p className="cxtxt">Total Quantity</p>
                      <div className="ctbox">
                        <div class="d-flex">
                          <span class="minus" onClick={() => decrement()}>
                            -
                          </span>
                          <input class="dytxt" type="text" value={counter} />
                          <span class="plus" onClick={() => increment()}>
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div> */}
                {/* <div className="col-6 mt-1">
                    <div className="opbox">
                      <p className="cxtxt">Remaining NFT</p>
                      <div className="ctbox">400</div>
                    </div>
                  </div>
                  <div className="col-6 mt-1">
                    <div className="opbox">
                      <p className="cxtxt">Total</p>
                      <div className="ctbox">400</div>
                    </div>
                  </div>
                </div> */}
                {console.log(endTime)}
                <div className="flex-center">
                  { 
                    endTime>new Date() ? 
                    isWhileList ?
                    Number(maxMint)>Number(wlMintByUser) ? 
                    <MintBtn loading={loading} onClick={mintNft} />
                    : <DisBtn textForButton={`User can only mint ${maxMint} NFTs`}/> 
                    : <img className="bbtn" src={"/images/new/wbtn3.png"}/>
                    : <DisBtn textForButton={`Whitelist Sale Ended`}/> 
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const New = () => {
  const [isConnected, setConnection] = React.useState(false);

  const connect = async() =>{
    try {
      const address = await connectWallet()
      const addresses = await getAccount()
      if(address&&addresses&&addresses[0]){
        setConnection(true)
      }
    } catch (error) {
      console.log(error)
      toast.error("Can't connect Wallet!")
    }
  }

  useEffect(async()=>{
    const address = localStorage.getItem("address")
    const account = await getAccount()
    if(address&&account&&account[0]){
      setConnection(true)
    }
  },[])

  return (
    <Wrapper>
      <Header />
      <main
        id="main-content"
        className=""
        style={{ background: "#6a2d28" }}
      >
        {!isConnected ? (
          <WalletConnection setConnection={connect} />
        ) : (
          <Page2 />
        )}
      </main>
    </Wrapper>
  );
};

export default withNoSSR(New);
