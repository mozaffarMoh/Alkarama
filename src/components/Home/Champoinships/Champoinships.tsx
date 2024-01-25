import "./Champoinships.scss";
import cup1 from "../../../assets/images/Home/cup1.png";
import cup2 from "../../../assets/images/Home/cup2.png";
import cup3 from "../../../assets/images/Home/cup3.png";

const Championships = () => {
  return (
    <div className="championships flexCenterColumn">
      <div className="championships-title flexCenter">
        <p>البطولات</p>
      </div>
      <div className="championship-cups flexCenter">
        <div className="championship-cup flexCenter">
          <img src={cup1} alt="" loading="lazy" />
          <h3>اسم البطولة (2024)</h3>
        </div>

        <div className="championship-cup flexCenter">
          <img src={cup2} alt="" loading="lazy" />
          <h3>اسم البطولة (2024)</h3>
        </div>

        <div className="championship-cup flexCenter">
          <img src={cup3} alt="" loading="lazy" />
          <h3>اسم البطولة (2024)</h3>
        </div>
      </div>
    </div>
  );
};

export default Championships;
