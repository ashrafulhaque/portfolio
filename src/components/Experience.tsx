import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ title, company, duration, description, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto opacity-0 transform translate-x-10 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 -translate-x-0" : ""
      }`}
    >
      <div className="flex items-start">
        {index !== 0 && (
          <div className="border-l-4 border-blue-500 h-full mr-6"></div>
        )}
        <div className="mb-2 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
          <p className="text-gray-500 text-sm">{duration}</p>
          <p className="text-gray-700 font-medium mb-2">{company}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Assistant Programmer",
      company: "Department of ICT, ICT Division",
      duration: "Dec, 2022 – Present",
      description:
        "Responsible for developing and maintaining software applications, ICT infrastructure, research and development.",
    },
    {
      title: "Assistant Hardware Engineer",
      company: "Rupali Bank PLC, Bangladesh",
      duration: "Oct, 2019 – Dec, 2022",
      description:
        "Responsible for maintenance and upgradation of the bank's computer hardware and networking infrastructure.",
    },
    {
      title: "Assistant Network Engineer",
      company: "Info Sarker Phase-3 Project, BCC",
      duration: "Jan, 2019 – Sep, 2019",
      description:
        "Responsible for the installation, configuration, and maintenance of the project's network infrastructure.",
    },
  ];

  return (
    <section id="experience" className="py-10 px-5 lg:px-12 bg-[#FFF5EF]">
      <h2 className="font-play text-5xl font-bold text-center mb-5">
        MY <span className="text-[#388beb]">EXPERIENCE</span>
      </h2>
      <div className="divider divider-start divider-info">EXPERIENCE</div>

      <div className="relative flex flex-col lg:flex-row gap-8 mt-10 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
            index={index}
            totalExperiences={experiences.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
