import "./Players.scss";
import emptyRectangle from "../../../assets/images/About/emptyRectangle.png";
import emptyRectangleBlue from "../../../assets/images/About/emptyRectangleBlue.png";
import { PlayersArray } from "./PlayersArray";

const Players = () => {
  const rectanglesArray = Array(5).fill("");

  return (
    <div className="container players">
      <div className="players-1">
        <h3>اللاعبون</h3>
        <div className="players-rectangles">
          {rectanglesArray.map((_, index) => {
            return <img key={index} src={emptyRectangle} alt="" />;
          })}
        </div>
      </div>
      <div className="row players-content">
        {PlayersArray.map((item, index) => {
          return (
            <div
              key={index}
              className={`col-lg-4 col-md-4 col-sm-4 ${index === 1 && "mt-5"}`}
            >
              <div className="card players-content-1">
                <img src={emptyRectangleBlue} alt="" />
                <img
                  src={item.playerImage}
                  className="card-img-top images"
                  alt="..."
                />
                <div className="card-body card-players-content">
                  <div className="card-details flexCenterColumn">
                    <p>عام</p>
                    <p>{item.playerAge}</p>
                  </div>
                  <div className="card-details flexCenterColumn">
                    <p>{item.playerHeight}</p>
                    <p>CM</p>
                  </div>
                  <div className="card-details flexCenterColumn">
                    <p>الرقم</p>
                    <p>{item.playerNumber}</p>
                  </div>{" "}
                  <div className="card-details flexCenterColumn">
                    <p>المركز</p>
                    <p>{item.playerPosition}</p>
                  </div>
                  <p className="card-text">{item.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Players;
