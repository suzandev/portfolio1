import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build responsive, fast, and modern user interfaces using React, Next.js, JavaScript, TypeScript, and Tailwind CSS. I focus on performance, accessibility, and smooth user experience across all devices.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I develop secure and scalable server-side applications using Node.js, Express.js, and REST APIs. I handle authentication, business logic, and API integration for full-stack applications.",
  },
  {
    id: 3,
    title: "Database & Full-Stack Integration",
    description:
      "I work with MongoDB, PostgreSQL, SQL, Prisma, and Firebase to design efficient data structures and connect frontend and backend systems for complete full-stack solutions.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services">
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I am a Full-Stack Developer specializing in building modern,
            scalable web applications using React, Next.js, Node.js, and
            Express.js.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I focus on creating complete digital solutions by combining clean UI
            design, strong backend architecture, and efficient database
            management to deliver fast and reliable user experiences.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5">
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
