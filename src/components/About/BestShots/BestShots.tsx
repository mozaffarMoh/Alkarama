import "./BestShots.scss";
import bestShots1 from "../../../assets/images/About/bestShots1.png";
import bestShots2 from "../../../assets/images/About/bestShots2.png";
import bestShots3 from "../../../assets/images/About/bestShots3.png";
import lineRed from "../../../assets/images/About/lineRed.png";
import lineBlue from "../../../assets/images/About/lineBlue.png";
import videoPlay from "../../../assets/images/About/videoPlay.png";
import eye from "../../../assets/images/About/eye.png";

const BestShots = () => {
  return (
    <div className="videos-fanz">
      <h3>أجمل لقطات مشجعي نادي الكرامة</h3>
      <div className="fanz-lines-end">
        <img src={lineBlue} alt="" className="blue" />
        <img src={lineRed} alt="" className="orange" />
      </div>
      <div className="videos-fanz-content">
        <div className="videos-fanz-first">
          <img
            src={bestShots1}
            className="videos-back"
            alt=""
            srcSet=""
          />
          <img src={videoPlay} className="videos-circle" alt="" />
        </div>
        <div className="videos-fanz-second">
          <p>أفراح جمهور الكرامة بعد الفوز على فريق الجلاء</p>
          <div className="videos-fanz-second-content">
            <div>
              <span>
                <img src={eye} alt="" srcSet="" />
              </span>
              2ألف مشاهدة
            </div>
            <div>قبل 5 أشهر</div>
          </div>
        </div>
      </div>
      <div className="videos-fanz-content">
        <div className="videos-fanz-first">
          <img
            src={bestShots2}
            className="videos-back"
            alt=""
            srcSet=""
          />
          <img src={videoPlay} className="videos-circle" alt="" />
        </div>
        <div className="videos-fanz-second">
          <p>
            فرحة جمهور نادي الكرامة بعد فوز فريقه على فريق الوثبة في ديربي
            العدية
          </p>
          <div className="videos-fanz-second-content">
            <div>
              <span>
                <img src={eye} alt="" srcSet="" />
              </span>
              2ألف مشاهدة
            </div>
            <div>قبل 5 أشهر</div>
          </div>
        </div>
      </div>
      <div className="videos-fanz-content">
        <div className="videos-fanz-first">
          <img
            src={bestShots3}
            className="videos-back"
            alt=""
            srcSet=""
          />
          <img src={videoPlay} className="videos-circle" alt="" />
        </div>
        <div className="videos-fanz-second">
          <p>لقطات من افراح دمهور نادي الكرامة احتفالاً بتتويجهم</p>
          <div className="videos-fanz-second-content">
            <div>
              <span>
                <img src={eye} alt="" srcSet="" />
              </span>
              2ألف مشاهدة
            </div>
            <div>قبل 5 أشهر</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestShots;
