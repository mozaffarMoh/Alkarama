import "./NewsSlide.scss";
import newsSlideImage from "../../../assets/images/News/news-image.png";
import news1 from "../../../assets/images/News/news-1.png";
import news4 from "../../../assets/images/News/news-4.png";

const NewsSlide = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={newsSlideImage} className="w-100 back" alt="..." />
          <div className="carousel-captionn">
            <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
            <p>
              تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4 مباريات،
              وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم بلقاء مؤجل يجمع
              الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة يدخل الوثبة المباراة
              تحت قيادة المدرب مصعب محمد، منتشيا بفوزه على الجيش ثم تشرين، حيث
              يحتل المركز الرابع ب8 نقاط.في نفس الوضعية يلعب جبلة بحافز كبير بعد
              الفوز ع
            </p>
            <div className="circle">
              <img src={news4} alt="" />
              <img src={news4} alt="" />
              <img src={news4} alt="" />
              <img src={news4} alt="" />
              <img src={news4} alt="" />
              <img src={news4} alt="" />
              <img src={news4} alt="" />
              <img src={news4} alt="" />
              <img src={news1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default NewsSlide;
