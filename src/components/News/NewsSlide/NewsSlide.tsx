import "./NewsSlide.scss";
import { Carousel } from "react-bootstrap";
import news1 from "../../../assets/images/News/news-1.png";
import news4 from "../../../assets/images/News/news-4.png";
import React from "react";
import axios from "axios";

const NewsSlide = () => {
  const [newsArray, setNewsArray] = React.useState([]);
  const [indexValue, setIndexValue] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://in.cliprz.org/api/view/type/informations?type=news")
      .then((res) => {
        setNewsArray(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  /* when select new Item change indexValue */
  const handleCarouselSelect = (selectedIndex: number) => {
    if (selectedIndex >= 0 && selectedIndex < newsArray.length)
      setIndexValue(selectedIndex);
  };

  return (
    <Carousel
      className="newsSlide"
      activeIndex={indexValue}
      onSelect={handleCarouselSelect}
    >
      <span className="carousel-control-prev-icon"></span>
      <span className="carousel-control-next-icon"></span>

      {loading ? (
        <div className="loading-spinner flexCenterColumn">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="carousel-inner news-image-container">
          {newsArray.map((item: any, index) => {
            return (
              <Carousel.Item
                className={`${index === indexValue && "active"}`}
                key={index}
              >
                <img src={item.image} className="w-100 back" alt="..." />
                <div className="carousel-captionn">
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                  <div className="circle">
                    {newsArray.map((_, i) => {
                      return (
                        <img src={indexValue === i ? news1 : news4} key={i} />
                      );
                    })}
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </div>
      )}
    </Carousel>
  );
};

export default NewsSlide;
