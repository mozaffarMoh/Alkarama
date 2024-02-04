import ClubCreator from "../../components/History/ClubCreator/ClubCreator";
import ClubTitles from "../../components/History/ClubTitles/ClubTitles";
import HistoryBestGoals from "../../components/History/HistoryBestGoals/HistoryBestGoals";
import Musuem from "../../components/History/Musuem/Musuem";
import "./History.scss";

const History = () => {
  return (
    <div className="history">
      <Musuem />
      <ClubCreator />
      <ClubTitles />
      <HistoryBestGoals />
    </div>
  );
};

export default History;
