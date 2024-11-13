import {
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaMobileAlt,
  FaPhoneSquareAlt,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer justify-around bg-[#22252C] text-neutral-content p-6">
        <div>
          <h6 className="footer-title">Address</h6>
          <p>
            <i className="fa-solid fa-location-dot"></i> Department of ICT, ICT
            Division
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            Ministry of Posts, Telecommunications and IT
          </p>
          <p>
            <i className="fa-solid fa-earth-asia"></i>Dhaka, Bangladesh
          </p>
        </div>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a
            className="link link-hover inline-flex gap-1"
            href="https://www.linkedin.com/in/imashrafulhaque/"
            target="_blank"
          >
            <span className="mt-1">
              <FaLinkedin />
            </span>
            Linkedin
          </a>
          <a
            className="link link-hover inline-flex gap-1"
            href="https://x.com/imashrafulhaque"
            target="_blank"
          >
            <span className="mt-1">
              <FaTwitter />
            </span>
            Twitter
          </a>
          <a
            className="link link-hover inline-flex gap-1"
            href="https://stackoverflow.com/users/3220092/ashraful-haque"
            target="_blank"
          >
            <span className="mt-1">
              <FaStackOverflow />
            </span>
            Stack Overflow
          </a>
          <a
            className="link link-hover inline-flex gap-1"
            href="https://www.youtube.com/@troubleshootprogramming4452"
            target="_blank"
          >
            <span className="mt-1">
              <FaYoutube />
            </span>
            Youtube
          </a>
        </nav>
        <div>
          <h6 className="footer-title">Contact</h6>
          <p className="inline-flex gap-1">
            <span className="mt-1">
              <FaPhoneSquareAlt />
            </span>
            Phone: XXX-XXXXXX
          </p>
          <p className="inline-flex gap-1">
            <span className="mt-1">
              <FaMobileAlt />
            </span>
            Mobile: +880 17XX-XXXXXX
          </p>
          <p className="inline-flex gap-1">
            <span className="mt-1">
              <FaGlobe />
            </span>
            https://portfolio-of-ashraful.vercel.app
          </p>
          <p className="inline-flex gap-1">
            <span className="mt-1">
              <FaEnvelope />
            </span>
            ashrafulhaque404@gmail.com
          </p>
        </div>
      </footer>
      <div className="mx-auto text-center text-[15px] bg-[#22252C] text-neutral-content py-6 border-t-[1px] border-gray-600">
        <p>
          Copyright © {new Date().getFullYear()} Md. Ashraful Haque - All right
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
