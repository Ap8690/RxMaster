const MintBtn = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} className="mint-btn">
      {loading ? (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        "MINT"
      )}
    </button>
  )
}

export default MintBtn
