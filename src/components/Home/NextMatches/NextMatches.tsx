import "./NextMatches.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import useGet from "../../../api/useGet";
import endPoints from "../../../api/endPoints";

const NextMatches = () => {
  const [data] = useGet(endPoints.allMatches);

  return (
    <div className="next-matches">
      <h6>المباريات القادمة</h6>
      <div className="next-matches-frames flexCenter">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 5000 }}
          speed={800}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          {data &&
            data.map((item: any, index) => {
              return (
                <SwiperSlide className="home-slide-item" key={index}>
                  <div className="frame flexCenter">
                    <p>{item.when.slice(0, 10)} الجمعة</p>
                    <p>{item.when.slice(11, 16)} عصراً</p>
                    <div className="frame-details flexCenter">
                      <div className="frame-team">
                        <img src={item.first_club_logo} />
                        <p>{item.first_club}</p>
                      </div>
                      <div className="frame-result">
                        <p>ملعب خالد بن الوليد</p>
                        <h1>1 : 0</h1>
                      </div>
                      <div className="frame-team">
                        <img src={item.second_club_logo} />
                        <p>{item.second_club}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        {/*         <div className="frame flexCenter">
          <p>الجمعة، 2023/05/26</p>
          <p>12 : 12 عصراً</p>
          <div className="frame-details flexCenter">
            <div className="frame-team">
              <img src={karamaImage} />
              <p>الكرامة</p>
            </div>
            <div className="frame-result">
              <p>ملعب خالد بن الوليد</p>
              <h1>1 : 0</h1>
            </div>
            <div className="frame-team">
              <img src={jablaImage} />
              <p>جبلة</p>
            </div>
          </div>
        </div>
        <div className="frame flexCenter">
          <p>الجمعة، 2023/05/26</p>
          <p>12 : 12 عصراً</p>
          <div className="frame-details flexCenter">
            <div className="frame-team">
              <img src={karamaImage} />
              <p>الكرامة</p>
            </div>
            <div className="frame-result">
              <p>ملعب خالد بن الوليد</p>
              <h1>1 : 0</h1>
            </div>
            <div className="frame-team">
              <img src={jablaImage} />
              <p>جبلة</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NextMatches;
