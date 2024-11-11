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
    <section className="py-5 px-5 lg:px-10" id="about">
      <h2 className="font-play text-5xl py-6 font-bold text-center lg:text-left">
        <span className="text-[#388beb] border-b-8 border-[#388beb]">
          About
        </span>{" "}
        Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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

        <div className="text-center">
          <p className="text-gray-500 mb-4">
            Here are some of the tools I use regularly:
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <FaReact size={40} className="text-blue-500" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">React</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs size={40} className="text-black" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">
                Next.js
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={40} className="text-teal-400" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">
                Tailwind CSS
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript size={40} className="text-yellow-500" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">
                JavaScript
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs size={40} className="text-green-500" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">
                Node.js
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress size={40} className="text-gray-500" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">
                Express.js
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb size={40} className="text-green-600" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">
                MongoDB
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiHtml5 size={40} className="text-orange-500" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 size={40} className="text-blue-600" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <SiJson size={40} className="text-yellow-600" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">JSON</p>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase size={40} className="text-purple-500" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">SQL</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGitAlt size={40} className="text-orange-600" />
              <p className="text-gray-700 mt-2 text-sm font-semibold">Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
