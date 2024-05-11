import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider_wrapper">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        slidesPerView={1}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            className="hero h-[600px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/2ybRZ1d/1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl md:text-4xl font-bold">
                  Culinary Harmony
                </h1>
                <p className="mb-5">
                  Effortlessly manage reservations, streamline orders, and
                  optimize staff scheduling with our intuitive restaurant
                  management platform.
                </p>
                <Link
                  to="/allfoods"
                  className="px-8 py-3 rounded-lg bg-[#4D4C7D] text-white"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[600px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/7vNYyGN/2.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl md:text-4xl font-bold">
                  Culinary Harmony
                </h1>
                <p className="mb-5">
                  Effortlessly manage reservations, streamline orders, and
                  optimize staff scheduling with our intuitive restaurant
                  management platform.
                </p>
                <Link
                  to="/allfoods"
                  className="px-8 py-3 rounded-lg bg-[#4D4C7D] text-white"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[600px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/x8P64HF/3.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl md:text-4xl font-bold">
                  Culinary Harmony
                </h1>
                <p className="mb-5">
                  Effortlessly manage reservations, streamline orders, and
                  optimize staff scheduling with our intuitive restaurant
                  management platform.
                </p>
                <Link
                  to="/allfoods"
                  className="px-8 py-3 rounded-lg bg-[#4D4C7D] text-white"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[600px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/RbwHb6f/4.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-3xl md:text-4xl font-bold">
                  Culinary Harmony
                </h1>
                <p className="mb-5">
                  Effortlessly manage reservations, streamline orders, and
                  optimize staff scheduling with our intuitive restaurant
                  management platform.
                </p>
                <Link
                  to="/allfoods"
                  className="px-8 py-3 rounded-lg bg-[#4D4C7D] text-white"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
