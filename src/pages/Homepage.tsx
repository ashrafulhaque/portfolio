import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Homepage = () => {
  return (
    <>
      <main>
        <Introduction />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default Homepage;
