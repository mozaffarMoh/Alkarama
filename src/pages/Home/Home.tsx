import "./Home.scss";
import SlideHome from "../../components/Home/SlideHome/SlideHome";
import CurrentMatch from "../../components/Home/CurrentMatch/CurrentMatch";
import LastNews from "../../components/Home/LastNews/LastNews";
import LeagueTable from "../../components/Home/LeagueTable/LeagueTable";
import NextMatches from "../../components/Home/NextMatches/NextMatches";
import Championships from "../../components/Home/Champoinships/Champoinships";
import BestGoals from "../../components/Home/BestGoals/BestGoals";
import useGet from "../../api/useGet";
import endPoints from "../../api/endPoints";

const Home = () => {
  const [data] = useGet(endPoints.news);

  return (
    <div className="home flexCenterColumn">
      <SlideHome/>
      <CurrentMatch data={data} />
      <LastNews />
      <LeagueTable />
      <NextMatches />
      <Championships />
      <BestGoals />
    </div>
  );
};

export default Home;
