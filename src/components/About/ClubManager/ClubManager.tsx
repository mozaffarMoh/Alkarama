import "./ClubManager.scss";
import lineRed from "../../../assets/images/About/lineRed.png";
import lineBlue from "../../../assets/images/About/lineBlue.png";
import manager from "../../../assets/images/About/manager.png";
import managerDetails from "../../../assets/images/About/managerDetails.jpg";

const ClubManager = () => {
  return (
    <div className="container h">
      <div className="h-main">
        <div className="h-heads">
          <h3>رئيس النادي</h3>
          <div className="lines">
            <img src={lineBlue} alt="" className="blue" />
            <img src={lineRed} alt="" className="orange" />
          </div>
        </div>
        <div className="heads">
          <img src={managerDetails}className="back" alt="" srcSet=""  />
          <img src={manager} className="captin" alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default ClubManager;
