import "./SlideHome.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import slide from "../../../assets/images/Home/slide.png";

const SlideHome = ({ data }: any) => {
  return (
    <div className="slide-home">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 5000 }}
        speed={800}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="home-slide-item">
          <img src={slide} />
          <p> الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideHome;
