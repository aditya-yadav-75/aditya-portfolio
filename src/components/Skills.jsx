import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      icon: <FaReact />,
    },
    {
      title: "Programming & DSA",
      skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      icon: <FaCode />,
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code"],
      icon: <FaGithub />,
    },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            whileHover={{ y: -8 }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
            "
          >
            <div className="text-4xl text-blue-400 mb-4">
              {category.icon}
            </div>

            <h3 className="text-2xl font-bold mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;