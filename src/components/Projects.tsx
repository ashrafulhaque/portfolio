import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NFS CarShop",
      image: "/projects/carshop.jpeg",
      description:
        "A full-stack responsive web application containing homepage, product listings, user authentication, and role based dashboard functionalities.",
      technologies: ["React", "Tailwind", "MongoDB", "Node.js", "Express.js"],
      github: "https://github.com/ashrafulhaque/mernstack-car-shop-server",
      liveUrl: "https://mernstack-car-shop-client.vercel.app",
    },
    {
      id: 2,
      title: "Course App",
      image: "/projects/courseapp.jpeg",
      description:
        "A full-stack responsive web application built with React, Firebase Authentication, and Node.js/Express.js.",
      technologies: ["React", "Tailwind", "DaisyUI", "Node.js", "Express.js"],
      github: "https://github.com/ashrafulhaque/express-react-course-app",
      liveUrl: "https://express-react-course-app.vercel.app",
    },
    {
      id: 3,
      title: "City Foods",
      image: "/projects/cityfood.jpeg",
      description:
        "This responsive food website is developed using HTML, CSS, ES6, Tailwind CSS, and Daisy UI. It dynamically fetches food data from The Meal DB API based on user selections.",
      technologies: ["React", "Tailwind CSS", "Daisy UI", "The Meal DB API"],
      github: "https://github.com/ashrafulhaque/food-website-template",
      liveUrl: "https://ashrafulhaque.github.io/food-website-template",
    },
    {
      id: 4,
      title: "Book Shop",
      image: "/projects/bookshop.jpeg",
      description:
        "A responsive multi-page book shop website built with React and React Router.",
      technologies: ["React", "Tailwind", "React Router Dom"],
      github: "https://github.com/ashrafulhaque/react-book-shop",
      liveUrl: "https://react-book-shop-phi.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-10 px-5 lg:px-12">
      <h2 className="font-play text-5xl font-bold text-center mb-10">
        <span className="text-[#388beb] border-b-8 border-[#388beb]">My</span>{" "}
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative h-72 group overflow-hidden rounded-lg shadow-lg bg-cover bg-center transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-black transition-opacity opacity-0 group-hover:opacity-50"></div>

            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-100 mt-2 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="badge badge-outline text-white border-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline text-white flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
