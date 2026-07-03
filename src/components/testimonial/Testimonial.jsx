import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Delivered a high-quality full-stack solution with great attention to performance and usability.",
    quote:
      "The project was built with clean code, smooth UI, and solid backend integration. Everything worked exactly as expected, and the overall experience was excellent.",
    name: "Client Feedback",
    designation: "Full-Stack Web Application Project",
  },
  {
    message:
      "Impressive frontend development with a strong focus on user experience and responsiveness.",
    quote:
      "The interface is clean, modern, and works perfectly across all devices. The use of React and Tailwind CSS made the product feel very fast and intuitive.",
    name: "UI Review",
    designation: "Frontend Development Project",
  },
  {
    message:
      "Reliable, efficient, and well-structured full-stack implementation.",
    quote:
      "The backend integration, API handling, and database structure were all implemented professionally. The final result is scalable and production-ready.",
    name: "Technical Review",
    designation: "Backend & Full-Stack Development",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">What People Say</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}>
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
