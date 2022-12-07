import Countdown from "react-countdown"

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span className="countdownTimer">
        <div className="timerTime">
          <span>{days}</span>
          <span>DAYS</span>
        </div>
        <div className="timerTime__seprator">:</div>
        <div className="timerTime">
          <span>{hours}</span>
          <span>HOURS</span>
        </div>
        <div className="timerTime__seprator">:</div>
        <div className="timerTime">
          <span>{minutes}</span>
          <span>MINUTES</span>
        </div>
        <div className="timerTime__seprator">:</div>
        <div className="timerTime">
          <span>{seconds}</span>
          <span>SECONDS</span>
        </div>
      </span>
    )
  }

  return <Countdown date={date} renderer={renderer} />
}

export default CountdownTimer
