import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaReact />,
      title: "React",
      desc: "Building interactive user interfaces",
    },
    {
      icon: <FaCode />,
      title: "DSA",
      desc: "Problem solving & logic building",
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend",
      desc: "Modern responsive websites",
    },
    {
      icon: <FaRocket />,
      title: "Learning",
      desc: "Full Stack Development",
    },
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <p className="text-lg text-gray-400 leading-9">
              Hello! I'm Aditya Yadav, a first-year
              Computer Science student passionate about
              creating beautiful and performant web
              applications.
            </p>

            <p className="text-lg text-gray-400 leading-9 mt-6">
              Currently focused on React, JavaScript,
              Data Structures & Algorithms and modern
              frontend development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            {cards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                "
              >
                <div className="text-4xl text-blue-400 mb-4">
                  {card.icon}
                </div>

                <h3 className="font-bold text-xl">
                  {card.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {card.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;