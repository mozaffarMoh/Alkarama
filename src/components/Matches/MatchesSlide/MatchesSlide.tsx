import "./MatchesSlide.scss";
import { matchesArray } from "./MatchesArray";

const MatchesSlide = () => {
  return (
    <div className="matches-slide">
      <div className="macthes-slide-background flexCenter">
        <h1>المباريات</h1>
      </div>
      <div className="slider-container">
        {matchesArray.map((item: any, index) => {
          return (
            <div key={index} className="cards">
              <div className="da1">
                <label htmlFor="">01/09</label>
              </div>
              <div className="Citems">
                <div className="teams">
                  <img src={item.club1Image} alt="" />
                  <h1>{item.club1Name}</h1>
                  <h2>{item.club1Result}</h2>
                </div>
                <div className="teams">
                  <img src={item.club2Image} alt="" />
                  <h1>{item.club2Name}</h1>
                  <h2>{item.club2Result}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchesSlide;
