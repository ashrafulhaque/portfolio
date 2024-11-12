import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

const useInView = (ref: React.RefObject<HTMLDivElement>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isInView;
};

const SkillCategory: React.FC<{
  title: string;
  skills: { name: string; level: number }[];
}> = ({ title, skills }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="space-y-4 w-full max-w-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              {skill.name}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {skill.level}%
            </span>
          </div>
          <Progress
            value={isInView ? skill.level : 0}
            className="h-3 transition-all duration-2000 ease-out bg-red-500 [&>div]:bg-black"
          />
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind/DaisyUI/Shadcn", level: 90 },
      { name: "JavaScript (ES6+)", level: 75 },
      { name: "React.js", level: 68 },
      { name: "Next.js", level: 52 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 62 },
      { name: "MongoDB", level: 70 },
      { name: "PHP", level: 75 },
      { name: "SQL", level: 78 },
    ],
    tools: [
      { name: "Git/GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Firebase", level: 85 },
    ],
    apis: [
      { name: "RESTful APIs", level: 88 },
      { name: "JSON", level: 90 },
      { name: "AJAX", level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-10 px-5 lg:px-12 bg-[#ffffff]">
      <h2 className="font-play text-5xl font-bold text-center mb-5">
        MY <span className="text-[#388beb]">SKILLS</span>
      </h2>
      <div className="divider divider-start divider-info">SKILLS</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto">
        <SkillCategory
          title="Frontend Technologies"
          skills={skillsData.frontend}
        />
        <SkillCategory
          title="Backend Technologies"
          skills={skillsData.backend}
        />
        <SkillCategory title="Tools & Frameworks" skills={skillsData.tools} />
        <SkillCategory title="APIs & Data Handling" skills={skillsData.apis} />
      </div>
    </section>
  );
};

export default Skills;
