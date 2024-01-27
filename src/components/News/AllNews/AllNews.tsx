import "./AllNews.scss";
import chevron from "../../../assets/images/News/chevron-right.jpg";
import recatngle11 from "../../../assets/images/News/Rectangle 11.png";
import newsCard1 from "../../../assets/images/News//NewsCard (1).jpg";
import newsCard2 from "../../../assets/images/News/NewsCard (2).jpg";
import newsCard3 from "../../../assets/images/News/NewsCard (3).jpg";
import newsCard4 from "../../../assets/images/News/NewsCard (4).jpg";
import newsCard5 from "../../../assets/images/News/NewsCard (5).jpg";
import rectangle12 from "../../../assets/images/News/Rectangle12.png";

const AllNews = () => {
  return (
    <div className="all-news flexCenter mt-4">
      <div className="all-news-archive flexCenterColumn">
        <div>
          <div className="flexCenter justify-content-between">
            <h3>ارشيف الاخبار</h3>
            <img src={chevron} alt="" className="image" />
          </div>
          <img src={recatngle11} alt="" className="m-2" />
          <div className="archive-results">
            <p>
              نتائج المباراه الاخيرة بين الوثبة و الكرامة في ملعب خالد ابن
              الوليد
            </p>
            <bdi>
              <span>5 hours ago</span>
            </bdi>
          </div>
        </div>
        <div className="archive-content-all flexCenterColumn">
          <div className="archive-content flexCenter">
            <img src={rectangle12} />
            <div>
              <h3>نص الخبر هنا نص الخبر هنانص الخبر هنانص الخبر</h3>
              <bdi>
                <p>10 oct 2023, 09:00 PM</p>
              </bdi>
            </div>
          </div>
          <div className="archive-content flexCenter">
            <img src={rectangle12} />
            <div>
              <h3>نص الخبر هنا نص الخبر هنانص الخبر هنانص الخبر</h3>
              <bdi>
                <p>10 oct 2023, 09:00 PM</p>
              </bdi>
            </div>
          </div>
        </div>
      </div>
      <div className="all-news-content">
        <img src={newsCard2} alt="..." />
        <img src={newsCard1} alt="..." />
        <img src={newsCard4} alt="..." />
        <img src={newsCard3} alt="..." />
        <img src={newsCard5} className="img-lg" alt="..." />
      </div>
    </div>
  );
};

export default AllNews;
