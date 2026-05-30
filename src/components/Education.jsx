import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      year: "2010 - 2023",
      title: "Lodha World School",
      description:
        "Completed Primary and Secondary Schooling. Built a strong academic foundation and developed an early interest in technology and problem solving.",
    },

    {
      year: "2023 - 2024",
      title: "Narayana Group of Institutions",
      description:
        "Pursued Class 11 with a focus on Science and Mathematics while strengthening analytical and logical thinking skills.",
    },

    {
      year: "2024 - 2025",
      title: "PACE IIT & Medical",
      description:
        "Completed Class 12 and prepared for competitive examinations. Developed discipline, consistency, and advanced problem-solving abilities.",
    },

    {
      year: "2025 - Present",
      title: "ITM Skills University",
      description:
        "Currently pursuing B.Tech in Computer Science Engineering. Exploring Software Development, Data Structures & Algorithms, React, and Full Stack Development through projects and continuous learning.",
    },
  ];

  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-24"
      >
        Education Journey
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}

        <div
          className="
          absolute
          left-4
          md:left-1/2
          top-0
          bottom-0
          w-[2px]
          bg-gradient-to-b
          from-blue-500
          via-purple-500
          to-pink-500
          "
        />

        {educationData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className={`
              relative
              mb-20
              flex
              ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }
            `}
          >
            {/* Dot */}

            <div
              className="
              absolute
              left-4
              md:left-1/2
              top-6
              w-5
              h-5
              rounded-full
              bg-blue-500
              border-4
              border-[#050816]
              md:-translate-x-1/2
              z-10
              "
            />

            {/* Card */}

            <div
              className="
              ml-12
              md:ml-0
              md:w-[45%]
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              hover:border-blue-500/30
              hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
              transition-all
              "
            >
              <span
                className="
                text-blue-400
                font-semibold
                "
              >
                {item.year}
              </span>

              <h3
                className="
                text-2xl
                font-bold
                mt-2
                mb-4
                "
              >
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;