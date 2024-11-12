import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiJson,
} from "react-icons/si";

const About = () => {
  return (
    <section className="py-10 px-5 lg:px-12 bg-[#FFF5EF]" id="about">
      <h2 className="font-play text-5xl font-bold text-center mb-5">
        <span className="text-[#388beb]">ABOUT</span> ME
      </h2>
      <div className="divider divider-start divider-info">ABOUT</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="text-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-6 animate-fadeIn">
            {[
              {
                icon: <FaReact size={35} />,
                label: "React",
                color: "text-blue-500",
              },
              {
                icon: <SiNextdotjs size={35} />,
                label: "Next.js",
                color: "text-black",
              },
              {
                icon: <SiTailwindcss size={35} />,
                label: "Tailwind CSS",
                color: "text-teal-400",
              },
              {
                icon: <SiJavascript size={35} />,
                label: "JavaScript",
                color: "text-yellow-500",
              },
              {
                icon: <FaNodeJs size={35} />,
                label: "Node.js",
                color: "text-green-500",
              },
              {
                icon: <SiExpress size={35} />,
                label: "Express.js",
                color: "text-gray-500",
              },
              {
                icon: <SiMongodb size={35} />,
                label: "MongoDB",
                color: "text-green-600",
              },
              {
                icon: <SiHtml5 size={35} />,
                label: "HTML5",
                color: "text-orange-500",
              },
              {
                icon: <SiCss3 size={35} />,
                label: "CSS3",
                color: "text-blue-600",
              },
              {
                icon: <SiJson size={35} />,
                label: "JSON",
                color: "text-yellow-600",
              },
              {
                icon: <FaDatabase size={35} />,
                label: "SQL",
                color: "text-purple-500",
              },
              {
                icon: <FaGitAlt size={35} />,
                label: "Git",
                color: "text-orange-600",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              >
                <div className={`${tool.color} transition-colors duration-300`}>
                  {tool.icon}
                </div>
                <p className="text-gray-700 mt-2 text-sm font-semibold">
                  {tool.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:pr-10 text-gray-500 text-md text-justify leading-6">
          <p className="my-5">
            I'm a passionate web developer specializing in{" "}
            <span className="font-semibold">full-stack development</span>, with
            a strong foundation in HTML5, CSS, and JavaScript (ES6), and
            experience in creating responsive and user-friendly websites.
          </p>
          <p className="pt-3">
            I’ve honed my skills in <span className="font-semibold">React</span>
            , <span className="font-semibold">Next.js</span>, and{" "}
            <span className="font-semibold">Tailwind CSS</span> for front-end
            frameworks, and in <span className="font-semibold">Node.js</span>,{" "}
            <span className="font-semibold">Express.js</span>, and{" "}
            <span className="font-semibold">MongoDB</span> on the backend.
          </p>
          <p className="pt-3">
            Constantly learning, I enjoy tackling coding challenges and crafting
            seamless user experiences. When I'm not coding, I explore tech
            blogs, open-source projects, and creative pursuits.
          </p>
          <p className="pt-3">
            Interested in working together? Feel free to{" "}
            <a href="#contact" className="text-primary underline">
              get in touch
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
