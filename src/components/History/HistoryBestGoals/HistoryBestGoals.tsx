import "./HistoryBestGoals.scss";
import bestGoalsImage from "../../../assets/images/History/BestGoals.png";

const HistoryBestGoals = () => {
  return (
    <div className="history-best-goals flexCenterColumn">
      <h1>Best Goals</h1>
      <img src={bestGoalsImage} />
    </div>
  );
};

export default HistoryBestGoals;
