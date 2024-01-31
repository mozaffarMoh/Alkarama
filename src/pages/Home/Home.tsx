import "./Home.scss";
import SlideHome from "../../components/Home/SlideHome/SlideHome";
import CurrentMatch from "../../components/Home/CurrentMatch/CurrentMatch";
import LastNews from "../../components/Home/LastNews/LastNews";
import LeagueTable from "../../components/Home/LeagueTable/LeagueTable";
import NextMatches from "../../components/Home/NextMatches/NextMatches";
import Championships from "../../components/Home/Champoinships/Champoinships";
import BestGoals from "../../components/Home/BestGoals/BestGoals";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home flexCenterColumn">
      <SlideHome />
      <CurrentMatch />
      <LastNews />
      <LeagueTable />
      <NextMatches />
      <Championships />
      <BestGoals />
      <Footer />
    </div>
  );
};

export default Home;
