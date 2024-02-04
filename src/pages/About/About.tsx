import AboutSlide from "../../components/About/AboutSlide/AboutSlide";
import BestShots from "../../components/About/BestShots/BestShots";
import ClubManager from "../../components/About/ClubManager/ClubManager";
import FansAssociation from "../../components/About/FansAssociation/FansAssociation";
import Players from "../../components/About/Players/Players";
import Staff from "../../components/About/Staff/Staff";
import Strategy from "../../components/About/Strategy/Strategy";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <AboutSlide />
      <ClubManager />
      <Staff />
      <Players />
      <Strategy />
      <FansAssociation />
      <BestShots />
    </div>
  );
};

export default About;
