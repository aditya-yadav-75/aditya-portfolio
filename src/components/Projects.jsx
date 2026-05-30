import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Coffee Works",
      description:
        "Modern coffee shop website with responsive design, interactive UI, and elegant user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/aditya-yadav-75/12.26-coffee-works",
    },

    {
      title: "Online Voting System",
      description:
        "JavaScript-based voting application with candidate selection, vote counting, and result generation.",
      tech: ["JavaScript", "HTML", "CSS"],
      github:
        "https://github.com/aditya-yadav-75/mini-project-js-online-voting-system-",
    },

    {
      title: "Tic Tac Toe",
      description:
        "Interactive Tic Tac Toe game with win detection, game reset, and smooth user interactions.",
      tech: ["JavaScript", "HTML", "CSS"],
      github:
        "https://github.com/aditya-yadav-75/tictactoe_miniproject-",
    },

    {
      title: "Tableau Replica",
      description:
        "Frontend replica inspired by Tableau dashboards featuring modern layouts and data visualization concepts.",
      tech: ["React", "CSS", "JavaScript"],
      github:
        "https://github.com/aditya-yadav-75/Tableau_replica_aditya_yadav",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
        text-5xl
        font-bold
        text-center
        mb-16
        "
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
            }}
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            hover:border-blue-500/40
            hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
            transition-all
            "
          >
            <h3
              className="
              text-2xl
              font-bold
              mb-4
              "
            >
              {project.title}
            </h3>

            <p
              className="
              text-gray-400
              leading-7
              mb-6
              "
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              transition-all
              "
            >
              <FaGithub />
              View Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;