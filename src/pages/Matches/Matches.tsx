import "./Matches.scss";
import Footer from "../../components/Footer/Footer";
import MatchesSlide from "../../components/Matches/MatchesSlide/MatchesSlide";
import AllMatches from "../../components/Matches/AllMatches/AllMatches";
import LeagueTable from "../../components/Home/LeagueTable/LeagueTable";

const Matches = () => {
  return (
    <div className="matches-page">
      <MatchesSlide />
      <AllMatches />
      <LeagueTable />
      <Footer />
    </div>
  );
};
export default Matches;
