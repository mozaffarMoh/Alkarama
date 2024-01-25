import "./NextMatches.scss";
import karamaImage from "../../../assets/images/Home/current-match-1.svg";
import jablaImage from "../../../assets/images/Home/current-match-2.svg";

const NextMatches = () => {
  return (
    <div className="next-matches">
      <h6>المباريات القادمة</h6>
      <div className="next-matches-frames flexCenter">
        <div className="frame flexCenter">
          <p>الجمعة، 2023/05/26</p>
          <p>12 : 12 عصراً</p>
          <div className="frame-details flexCenter">
            <div className="frame-team">
              <img src={karamaImage} />
              <p>الكرامة</p>
            </div>
            <div className="frame-result">
              <p>ملعب خالد بن الوليد</p>
              <h1>1 : 0</h1>
            </div>
            <div className="frame-team">
              <img src={jablaImage} />
              <p>جبلة</p>
            </div>
          </div>
        </div>
        <div className="frame flexCenter">
          <p>الجمعة، 2023/05/26</p>
          <p>12 : 12 عصراً</p>
          <div className="frame-details flexCenter">
            <div className="frame-team">
              <img src={karamaImage} />
              <p>الكرامة</p>
            </div>
            <div className="frame-result">
              <p>ملعب خالد بن الوليد</p>
              <h1>1 : 0</h1>
            </div>
            <div className="frame-team">
              <img src={jablaImage} />
              <p>جبلة</p>
            </div>
          </div>
        </div>
        <div className="frame flexCenter">
          <p>الجمعة، 2023/05/26</p>
          <p>12 : 12 عصراً</p>
          <div className="frame-details flexCenter">
            <div className="frame-team">
              <img src={karamaImage} />
              <p>الكرامة</p>
            </div>
            <div className="frame-result">
              <p>ملعب خالد بن الوليد</p>
              <h1>1 : 0</h1>
            </div>
            <div className="frame-team">
              <img src={jablaImage} />
              <p>جبلة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMatches;
