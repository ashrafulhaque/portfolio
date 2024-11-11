import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "./ui/button";

const Introduction = () => {
  return (
    <>
      <section>
        <div className="w-[90%] mx-auto max-w-screen-xl min-h-screen py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-10">
            <div className="font-semibold font-poppins sm:mt-10">
              <h3 className=" text-xl  text-[#7f7e81]">Hey! I'm,</h3>
              <h1 className="text-4xl sm:py-4 sm:text-5xl font-play leading-tight text-[#388beb]">
                Md. Ashraful Haque
              </h1>
              <h2 className="text-2xl text-[#7f7e81]">
                I'm a <span className="text-gray-500">Full Stack</span>{" "}
                Developer
              </h2>
              <p className="mt-3 sm:mt-6 text-xl font-normal leading-normal max-w-[400px]  text-[#7f7e81]">
                I develop beautiful and user-friendly websites with secure
                backend.
              </p>
              <div className="flex gap-4 justify-start mt-3 sm:mt-5 text-3xl text-[#388beb]">
                <a
                  href="https://www.linkedin.com/in/imashrafulhaque/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://stackoverflow.com/users/3220092/ashraful-haque"
                  target="_blank"
                >
                  <FaStackOverflow />
                </a>
                <a
                  className="animate-spin"
                  href="https://github.com/ashrafulhaque"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/ashrafulhaque"
                  target="_blank"
                >
                  <FaHackerrank />
                </a>
                <a href="https://x.com/imashrafulhaque" target="_blank">
                  <FaTwitter />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1PTMB7pSfvcFDi5NeB-1adWQiUpbkH1H7/view?usp=drive_link"
                className="btn btn-outline min-h-9 h-9 mt-6 ml-10 rounded-none"
              >
                View Resume
              </a>
            </div>
            <div>
              <img
                src="./about.jpg"
                className="mask mask-circle mx-auto max-h-[400px]"
                alt="Get in touch image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
