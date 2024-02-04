import AllNews from "../../components/News/AllNews/AllNews";
import NewsSlide from "../../components/News/NewsSlide/NewsSlide";
import "./News.scss";

const News = () => {
  return (
    <div>
      <NewsSlide />
      <AllNews />
    </div>
  );
};

export default News;
