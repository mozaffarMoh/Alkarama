import "./SlideHome.scss";
import endPoints from "../../../api/endPoints";
import useGet from "../../../api/useGet";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const SlideHome = () => {
  const [data] = useGet(endPoints.news);

  return (
    <div className="slide-home">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        navigation
        speed={800}
        pagination={{ clickable: true }}
      >
        {data &&
          data.map((item: any, index) => {
            return (
              <SwiperSlide className="home-slide-item" key={index}>
                <img src={item.image} />
                <p>{item.content}</p>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SlideHome;
