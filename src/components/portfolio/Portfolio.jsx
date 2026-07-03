import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "UI-UX DESIGN",
    title: "Restaurant Management System",
    description:
      "A modern full-stack restaurant platform designed for seamless food browsing and ordering experience. It features dynamic menu management, responsive UI, and efficient backend integration to ensure fast and smooth performance across all devices.",
    link: "https://suzandev-restaurant-design.netlify.app/",
  },
  {
    id: 2,
    image: card2,
    category: "Frontend Project",
    title: "EcoAdventure – Explore Nature Experiences",
    description:
      "A modern eco-adventure platform designed to help users explore and book nature-based travel experiences. It provides a smooth and responsive interface for discovering adventure packages and destinations.",
    link: "https://eco-adventure-experiences-b10a9.netlify.app/",
  },
  {
    id: 3,
    image: card3,
    category: "Tech E-Commerce",
    title: "Gadget Heaven – Modern E-Commerce Platform",
    description:
      "A full-stack e-commerce platform designed for browsing, exploring, and purchasing electronic gadgets. It features a responsive UI, dynamic product display, and smooth user experience across all devices.",
    link: "https://gadget-heaven-a8b10.netlify.app/",
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Restaurant Management System",
    description:
      "A modern full-stack restaurant platform designed for seamless food browsing and ordering experience. It features dynamic menu management, responsive UI, and efficient backend integration to ensure fast and smooth performance across all devices.",
    link: "https://suzandev-restaurant-design.netlify.app/",
  },
  {
    id: 5,
    image: card5,
    category: "Frontend Project",
    title: "EcoAdventure – Explore Nature Experiences",
    description:
      "A modern eco-adventure platform designed to help users explore and book nature-based travel experiences. It provides a smooth and responsive interface for discovering adventure packages and destinations.",
    link: "https://eco-adventure-experiences-b10a9.netlify.app/",
  },
  {
    id: 6,
    image: card6,
    category: "Tech E-Commerce",
    title: "Gadget Heaven – Modern E-Commerce Platform",
    description:
      "A full-stack e-commerce platform designed for browsing, exploring, and purchasing electronic gadgets. It features a responsive UI, dynamic product display, and smooth user experience across all devices.",
    link: "https://gadget-heaven-a8b10.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio">
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here’s a selection of my recent work, highlighting my experience in
            building modern, responsive, and user-friendly web applications.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold">
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
