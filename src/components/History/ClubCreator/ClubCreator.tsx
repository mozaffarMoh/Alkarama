import "./ClubCreator.scss";
import creatorImage from "../../../assets/images/History/creator.png";
import creatorBG from "../../../assets/images/History/CreatorBG.png";
import emptyCircle from "../../../assets/images/History/emptyCircle.jpg";
import FillCircle from "../../../assets/images/History/FillCircle.png";

const ClubCreator = () => {
  return (
    <div className="club-creator flexCenterColumn">
      <h1>تاريخ النادي</h1>

      <div className="club-creator-border flexCenterColumn">
        <div className="club-creator-content flexCenter">
          <div className="club-creator-text flexCenterColumnStartItems">
            <h2>مؤسس نادي الكرامة</h2>
            <p>
              يعتبر الأستاذ ساطع الأتاسي مؤسس النادي , ويعتبر ايضا الأب الروحي
              للنادي
            </p>
          </div>

          <div className="club-creator-images flexCenter">
            <img src={creatorBG} className="creator-background-image" />
            <img src={creatorImage} className="creator-image" />
          </div>
        </div>
        <div className="circles">
          <img src={emptyCircle} />
          <img src={emptyCircle} />
          <img src={FillCircle} />
        </div>
      </div>
    </div>
  );
};

export default ClubCreator;
