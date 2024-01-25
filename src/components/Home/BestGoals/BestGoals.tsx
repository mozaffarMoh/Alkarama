import "./BestGoals.scss";
import goalsImage from "../../../assets/images/Home/goals.png";
import eyeIcon from "../../../assets/images/Home/eye.png";
import videoImage from "../../../assets/images/Home/videoPlay.png";

const BestGoals = () => {
  return (
    <div className="best-goals d-flex flex-column">
      <h3>اجمل الاهداف</h3>
      <div className="best-goals-content row">
        <div className="content-more col-6 d-flex flex-column">
          <div className="content-more-item flexCenter">
            <div>
              <img src={goalsImage} />
            </div>
            <div>
              <div className="content-more-item-text">
                <h5>أهداف الكرامة على جونبورك الكوري/نهائي ابطال أسيا</h5>
                <div className="content-more-item-text-details flexCenter">
                  <div className="flexCenter">
                    <img src={eyeIcon} />
                    <p>2 الف مشاهدة</p>
                  </div>
                  <p>قبل 5 أشهر</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-more-item flexCenter">
            <div>
              <img src={goalsImage} />
            </div>
            <div>
              <div className="content-more-item-text">
                <h5>أهداف الكرامة على جونبورك الكوري/نهائي ابطال أسيا</h5>
                <div className="content-more-item-text-details flexCenter">
                  <div className="flexCenter">
                    <img src={eyeIcon} />
                    <p>2 الف مشاهدة</p>
                  </div>
                  <p>قبل 5 أشهر</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-more-item flexCenter">
            <div>
              <img src={goalsImage} />
            </div>
            <div>
              <div className="content-more-item-text">
                <h5>أهداف الكرامة على جونبورك الكوري/نهائي ابطال أسيا</h5>
                <div className="content-more-item-text-details flexCenter">
                  <div className="flexCenter">
                    <img src={eyeIcon} />
                    <p>2 الف مشاهدة</p>
                  </div>
                  <p>قبل 5 أشهر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-video col-6">
          <img src={videoImage} />
        </div>
      </div>
    </div>
  );
};

export default BestGoals;
