import "./Strategy.scss";
import lineRed from "../../../assets/images/About/lineRed.png";
import lineBlue from "../../../assets/images/About/lineBlue.png";
import strategy1 from "../../../assets/images/About/strategies-1.jpg";
import strategy2 from "../../../assets/images/About/strategies-2.jpeg";
import strategy3 from "../../../assets/images/About/strategies-3.jpeg";
import strategy4 from "../../../assets/images/About/strategies-4.jpeg";

const Strategy = () => {
  return (
    <div className="container strategies">
      <div className="h-main">
        <div className="h-heads">
          <h3>استراتيجية النادي</h3>
          <div className="lines">
            <img src={lineBlue} alt="" className="blue" />
            <img src={lineRed} alt="" className="orange" />
          </div>
        </div>
      </div>
      <div className="row strategies-content">
        <div className="col-lg-6 col-md-6 col-sm-6 strategies-content-1">
          <img src={strategy2} alt="" srcSet="" />
          <img src={strategy4} alt="" srcSet="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 strategies-content-2">
          <img src={strategy1} alt="" srcSet="" />
          <img src={strategy3} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
