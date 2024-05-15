import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div>
      {/* section-title */}
      <div className="sectionTitle text-center max-w-3xl mx-auto space-y-3 mb-5 p-5">
        <h1 className="text-4xl font-semibold font_lobster">Our-Services</h1>
        <p className="font-medium text-gray-500">
          Efficient restaurant management website streamlining reservations,
          orders, inventory, and staff schedules for seamless operations and
          customer satisfaction.
        </p>
      </div>

      <div className="flex gap-8 lg:gap-5 flex-col lg:flex-row max-w-7xl mx-auto mb-16">
        <div className="w-full lg:w-3/4 hidden lg:block">
          <Swiper
            modules={[Navigation, Scrollbar, A11y, EffectFade, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/Bn8N9tR/img.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Buffet Services
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Efficient buffet services seamlessly integrated into
                    restaurant management website for convenience
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/dPvbcW3/sss.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Party Services
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Comprehensive party services integrated into restaurant
                    management website for seamless events
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/VpNTzLm/sssa.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Wedding Services
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Streamlined wedding services tailored within restaurant
                    management website for memorable celebrations
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/vqPJZJR/sd.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Home Delivery
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Efficient home delivery system integrated into restaurant
                    management website for convenience.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/Bn8N9tR/img.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Buffet Services
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Efficient buffet services seamlessly integrated into
                    restaurant management website for convenience
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/dPvbcW3/sss.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Party Services
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Comprehensive party services integrated into restaurant
                    management website for seamless events
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/VpNTzLm/sssa.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Wedding Services
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Streamlined wedding services tailored within restaurant
                    management website for memorable celebrations
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/vqPJZJR/sd.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Home Delivery
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Efficient home delivery system integrated into restaurant
                    management website for convenience.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service_card shadow-md border">
                <div className="overflow-hidden">
                  <img
                    className="object-cover hover:scale-105 transition-all"
                    src="https://i.ibb.co/Bn8N9tR/img.jpg"
                    alt=""
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Buffet Services
                  </h2>
                  <p className="text-sm text-gray-500 font_lato">
                    Efficient buffet services seamlessly integrated into
                    restaurant management website for convenience
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="service_card shadow-md border">
            <div className="overflow-hidden">
              <img
                className="object-cover w-full hover:scale-105 transition-all"
                src="https://i.ibb.co/Bn8N9tR/img.jpg"
                alt=""
              />
            </div>
            <div className="p-3 space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Buffet Services
              </h2>
              <p className="text-sm text-gray-500 font_lato">
                Efficient buffet services seamlessly integrated into restaurant
                management website for convenience
              </p>
            </div>
          </div>

          <div className="service_card shadow-md border">
            <div className="overflow-hidden">
              <img
                className="object-cover w-full hover:scale-105 transition-all"
                src="https://i.ibb.co/dPvbcW3/sss.jpg"
                alt=""
              />
            </div>
            <div className="p-3 space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Party Services
              </h2>
              <p className="text-sm text-gray-500 font_lato">
                Comprehensive party services integrated into restaurant
                management website for seamless events
              </p>
            </div>
          </div>

          <div className="service_card shadow-md border">
            <div className="overflow-hidden">
              <img
                className="object-cover w-full hover:scale-105 transition-all"
                src="https://i.ibb.co/VpNTzLm/sssa.jpg"
                alt=""
              />
            </div>
            <div className="p-3 space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Wedding Services
              </h2>
              <p className="text-sm text-gray-500 font_lato">
                Streamlined wedding services tailored within restaurant
                management website for memorable celebrations
              </p>
            </div>
          </div>

          <div className="service_card shadow-md border">
            <div className="overflow-hidden">
              <img
                className="object-cover w-full hover:scale-105 transition-all"
                src="https://i.ibb.co/vqPJZJR/sd.jpg"
                alt=""
              />
            </div>
            <div className="p-3 space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Home Delivery
              </h2>
              <p className="text-sm text-gray-500 font_lato">
                Efficient home delivery system integrated into restaurant
                management website for convenience.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 border px-2">
          <h1 className="text-2xl font-semibold text-center mb-2 font_lato text-gray-800">
            Opening Hours
          </h1>
          <hr />
          <p className="text-sm text-center py-3">
            Clear opening hours displayed on restaurant management website for
            customer convenience.
          </p>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                <tbody className="*:flex *:justify-between">
                  <tr>
                    <th>Monday</th>
                    <th>Closed</th>
                  </tr>

                  <tr>
                    <th>Tuesday</th>
                    <td>10:00 AM - 11:00 PM</td>
                  </tr>

                  <tr>
                    <th>Wednesday</th>
                    <td>10:00 AM - 11:00 PM</td>
                  </tr>

                  <tr>
                    <th>Thursday</th>
                    <td>10:00 AM - 11:00 PM</td>
                  </tr>

                  <tr>
                    <th>Friday</th>
                    <td>10:00 AM - 11:00 PM</td>
                  </tr>

                  <tr>
                    <th>Saturday</th>
                    <td>10:00 AM - 11:00 PM</td>
                  </tr>

                  <tr>
                    <th>Sunday</th>
                    <td>10:00 AM - 11:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
