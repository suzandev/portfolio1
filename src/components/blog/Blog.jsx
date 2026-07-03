import img1 from "../../assets/images/blog/tailwindCss.jpg";
import img2 from "../../assets/images/blog/full-stack.jpg";
import img3 from "../../assets/images/blog/real-world.jpg";
import img4 from "../../assets/images/blog/responsive.jpg";
import img5 from "../../assets/images/blog/ui-ux.jpg";
import img6 from "../../assets/images/blog/interface.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "22 Oct, 2025",
    comments: 246,
    title: "Why I prefer Tailwind CSS over traditional CSS frameworks",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "22 Oct, 2025",
    comments: 246,
    title: "How I structure scalable full-stack applications",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "22 Oct, 2025",
    comments: 246,
    title: "Lessons I learned from building real-world full-stack projects",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "22 Oct, 2025",
    comments: 246,
    title: "Responsive Design: Adapting to All Devices Seamlessly",
    link: "#!",
  },
  {
    id: 5,
    image: img5,
    date: "22 Oct, 2025",
    comments: 246,
    title: "Streamlining Workflows with UI/UX Best Practices",
    link: "#!",
  },
  {
    id: 6,
    image: img6,
    date: "22 Oct, 2025",
    comments: 246,
    title: "Optimizing Interface Components for Performance",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent blog posts where I share insights on design,
          development, and the latest industry trends.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}>
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}>
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
