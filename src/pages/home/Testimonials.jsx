import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Swiper modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { reviews } from "../../utils/Review";
import Rating from "../../Components/Rating";

const arrowBtn =
  "absolute top-1/2 -translate-y-1/2 z-10 grid place-items-center size-9 md:size-10 rounded-full " +
  "bg-white text-black shadow-md ring-1 ring-black/5 transition-colors cursor-pointer " +
  "hover:bg-primary hover:text-white [&.swiper-button-disabled]:opacity-40 " +
  "[&.swiper-button-disabled]:cursor-not-allowed";

const Testimonials = () => {
  return (
    <section className="section-container px-6">
      <div className="text-center my-12">
        <h3 className="text-base sm:text-lg font-semibold text-primary mb-3 md:mb-4 tracking-wide">
          Testimonials
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 capitalize">
          Our Client Reviews
        </h2>
      </div>

      <div className="relative md:max-w-7xl mx-auto">
        {/* Custom arrows (centered on the slider's left / right edge) */}
        <button
          type="button"
          aria-label="Previous"
          className={`testi-prev left-0 -translate-x-1/2 ${arrowBtn}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next"
          className={`testi-next right-0 translate-x-1/2 ${arrowBtn}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>

        {/* Swiper slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".testi-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={{ prevEl: ".testi-prev", nextEl: ".testi-next" }}
          modules={[Pagination, Autoplay, Navigation]}
          className="relative rounded"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={review.id ?? index}
              className="bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundImage: `url(${review.coverImg})` }}
            >
              <div className="min-h-[480px] md:min-h-0 md:h-[547px] flex justify-center items-center mb-4">
                <div className="mt-16 mb-5 bg-white shadow-2xl rounded-xl w-[90%] md:w-4/5 p-4 relative">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="size-20 absolute -top-5 left-1/2 -translate-x-1/2 rounded-t-full ring-10 ring-white  object-cover"
                  />
                  <div className="mt-16 text-center">
                    <h3 className="text-lg font-semibold dark:text-black">
                      {review.name}
                    </h3>
                    <p className="mb-3 dark:text-black">Verified Customer</p>
                    <p className="text-gray-500 dark:text-black mb-4">
                      "{review.review}"
                    </p>

                    <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                      <Rating rating={review.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots (below the slider, primary color) */}
        <div
          className="testi-pagination text-primary flex justify-center items-center mt-6"
          style={{
            "--swiper-pagination-color": "currentColor",
            "--swiper-pagination-bullet-inactive-color": "currentColor",
            "--swiper-pagination-bullet-inactive-opacity": "0.3",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;