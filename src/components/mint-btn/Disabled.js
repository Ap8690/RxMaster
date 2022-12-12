const DisBtn = ({textForButton}) => {
    return (
      <div>
        <button className="mint-btn" disabled={true} >
            Mint
        </button>
        <span>{textForButton}</span>
      </div>
    )
  }
  
  export default DisBtn
  