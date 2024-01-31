import "./Musuem.scss";
import musuemImage from "../../../assets/images/History/musem.png";

const Musuem = () => {
  const musuemCircles = Array(63).fill("");
  
  return (
    <div className="musuem" dir="ltr">
      <div className="musuem-template">
        <div className="musuem-rectangle"></div>
        <img src={musuemImage} className="musuem-image" />
        <div className="musuem-circles">
          {musuemCircles.map((_,index) => {
            return <div className="musuem-circle" key={index}></div>;
          })}
        </div>
      </div>

      <div className="musuem-text">
        <h1>متحف النادي</h1>
        <div className="musem-text-rectangle"></div>
      </div>
    </div>
  );
};

export default Musuem;
