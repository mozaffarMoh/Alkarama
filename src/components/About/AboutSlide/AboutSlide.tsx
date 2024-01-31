import "./AboutSlide.scss";
import slideBackground from "../../../assets/images/About/slide.png";
import slide1 from "../../../assets/images/About/slide1.png";
import FillCircle from "../../../assets/images/About/FillCircle.png";
import EmptyCircle from "../../../assets/images/About/emptyCircle.jpg";
import showMoreIcon from "../../../assets/images/About/showMore.jpg";

const AboutSlide = () => {
  return (
    <div className="about-slide">
      <div className="cotainer-fluid about-slide-image">
        <div className="main-img">
          <img src={slideBackground} alt="" srcSet="" />
        </div>
      </div>
      <div className="cotainer hero">
        <div className="row about-content">
          <h3>حول النادي</h3>
          <div className="col-lg-6 col-md-12 about-1">
            <h4>فكرة تأسيس نادي الكرامة الرياضي</h4>
            <p>
              جاءت فكرة تأسيس النادي من قبل مجموعة من شباب مدينة حمص الذين
              مارسوا راضة كرة القدم ,و فكرا بطريقة جدية في تاسيس نادي ليجمعهم
              جميعا
            </p>
            <div className="more">
              <p>عرض المزيد</p>
              <img src={showMoreIcon} alt="" srcSet="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 about-2">
            <div className="images">
              <img src={slide1} alt="" />
            </div>
          </div>
          <div className="circles">
            <img src={FillCircle} alt="" srcSet="" />
            <img src={EmptyCircle} alt="" srcSet="" />
            <img src={EmptyCircle} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
