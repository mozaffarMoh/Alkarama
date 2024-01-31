import Footer from "../../components/Footer/Footer";
import AllNews from "../../components/News/AllNews/AllNews";
import NewsSlide from "../../components/News/NewsSlide/NewsSlide";
import "./News.scss";

const News = () => {
  return (
    <div>
      <NewsSlide />
      <AllNews />
      <Footer />
    </div>
  );
};

export default News;
