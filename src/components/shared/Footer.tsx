import React from "react";

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
            className="link link-hover"
            href="https://www.linkedin.com/in/imashrafulhaque/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="link link-hover"
            href="https://x.com/imashrafulhaque"
            target="_blank"
          >
            Twitter
          </a>

          <a
            className="link link-hover"
            href="https://github.com/ashrafulhaque"
            target="_blank"
          >
            Github
          </a>

          <a
            className="link link-hover"
            href="https://www.youtube.com/@troubleshootprogramming4452"
            target="_blank"
          >
            Youtube
          </a>
        </nav>
        <div>
          <h6 className="footer-title">Contact</h6>
          <p>
            <i className="fa-solid fa-phone"></i> Phone: 555-555-5555
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen"></i> Mobile: +880
            1712-345678
          </p>
          <p>
            <i className="fa-solid fa-globe"></i> www.ashrafulhaque.com
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> ashrafulhaque404@gmail.com
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
