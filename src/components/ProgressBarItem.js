const ProgressBarItem = ({
  progressColor,
  progressTitle,
  progressAmount,
  currency,
  progressCounter,
}) => {
  return (
    <>
      <div className="flex-container progressCard">
        <div className="progressTitle">{progressTitle}</div>
        <div className="progressAmount">
          {progressAmount}
          <span className="progressCurrency">{currency}</span>
        </div>
      </div>

      <div className="progress" style={{ height: "5px" }}>
        <div
          className={`progress-bar ${progressColor}`}
          role="progressbar"
          style={{ width: `${progressCounter}%` }}
          aria-valuenow={progressCounter}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
};


export default ProgressBarItem