import "./LastNews.scss";
import newsCard1Image from "../../../assets/images/Home/NewsCard1.png";
import newsCard2Image from "../../../assets/images/Home/NewsCard2.png";
import newsCard3Image from "../../../assets/images/Home/NewsCard3.png";
import newsCard4Image from "../../../assets/images/Home/NewsCard4.png";


const LastNews = () => {
  return (
    <div className="last-news">
      <div className="last-news-text">
        <p>اخر الاخبار</p>
      </div>
      <div className="last-news-images row">
        <div className="row">
          <div className="col-5 image">
            <img src={newsCard1Image} />
          </div>
          <div className="col-7 image">
            <img src={newsCard2Image} />
          </div>
        </div>
        <div className="row">
          <div className="col-7 col-sm-6 image">
            <img src={newsCard3Image} />
          </div>
          <div className="col-5 col-sm-6 image">
            <img src={newsCard4Image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastNews;
