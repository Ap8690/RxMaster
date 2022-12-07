const ConnectWalletBtn = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} className="connect-wallet-btn">
      {loading ? (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        "CONNECT WALLET"
      )}
    </button>
  )
}

export default ConnectWalletBtn
