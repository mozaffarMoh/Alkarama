import "./ClubTitles.scss";
import cupImage from "../../../assets/images/History/cup.png";
import image1 from "../../../assets/images/History/image1.png";
import image2 from "../../../assets/images/History/image2.png";
import image3 from "../../../assets/images/History/image3.png";

const ClubTitles = () => {
  return (
    <div className="club-titles flexCenterColumn">
      <h1>البطولات</h1>
      <div className="club-titles-years flexBetween">
        <div className="year flexCenter">
          <p>2023</p>
        </div>
        <div className="year year-white flexCenter">
          <p>2007</p>
        </div>
        <div className="year flexCenter">
          <p>2014</p>
        </div>
      </div>
      <div className="club-titles-details flexCenter">
        <div className="club-titles-details-cup">
          <img src={cupImage} />
        </div>
        <div className="club-titles-details-text flexStartColumnStartItems">
          <div className="details-year flexCenter">
            <label>2007</label>
          </div>
          <div className="details-text">
            <p>
              حقق الكرامة السوري فوزا كبيرا على مضيفه السد القطري 2-صفر مساء
              الأربعاء ضمن الجولة الثالثة لدوري أبطال آسيا لكرة القدم، بينما
              تغلب القادسية الكويتي على الغرافة القطري وأصفهان الإيراني على
              الاتحاد السعودي والوصل الإماراتي على الكويت الكويتي. وانفرد
              الكرامة بصدارة المجموعة الثالثة برصيد سبع نقاط بعدما حسم مواجهته
              مع السد بهدفين لمحمد الحموي (70) وعاطف عبد الإله (73)
            </p>
          </div>
        </div>
      </div>
      <div className="club-titles-images flexCenter">
        <div className="images-right">
          <img src={image1} alt="" />
        </div>
        <div className="images-left flexBetweenColumn">
          <img src={image3} alt="" />
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClubTitles;
