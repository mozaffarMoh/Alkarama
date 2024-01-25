import "./SlideHome.scss";
import slideImage from "../../../assets/images/Home/slide.png";

const SlideHome = () => {
  return (
    <div className="slide-home">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slideImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <p>اكتشف المزيد</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SlideHome;
