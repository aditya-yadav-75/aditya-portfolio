import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      pt-24
      "
    >
      <div className="text-center">

        {/* Profile Image */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          relative
          w-52
          h-52
          mx-auto
          mb-12
          "
        >
          <div
            className="
            absolute
            inset-0
            rounded-full
            bg-blue-500/20
            blur-3xl
            "
          />

          <img
            src="/aditya.png"
            alt="Aditya Yadav"
            className="
            relative
            w-full
            h-full
            rounded-full
            object-cover
            border-4
            border-blue-500
            shadow-[0_0_40px_rgba(59,130,246,0.4)]
            "
          />
        </motion.div>

        {/* Name */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
          text-8xl
          font-black
          mb-8
          "
        >
          Aditya Yadav
        </motion.h1>

        {/* Typing Effect */}

        <div className="mb-12">
          <TypeAnimation
            sequence={[
              "BTech CSE Student",
              2000,
              "React Developer",
              2000,
              "Full Stack Learner",
              2000,
              "DSA Enthusiast",
              2000,
              "Future Software Engineer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="
            text-3xl
            font-bold
            text-blue-400
            "
          />
        </div>

        {/* Tagline */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="
          text-3xl
          font-bold
          text-gray-400
          mb-16
          "
        >
          I build sh*t.
        </motion.p>

        {/* Buttons */}

        <div
          className="
          flex
          justify-center
          gap-4
          flex-wrap
          "
        >
          <a
            href="#projects"
            className="
            px-8
            py-4
            rounded-2xl
            bg-blue-600
            hover:bg-blue-700
            transition-all
            "
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="
            px-8
            py-4
            rounded-2xl
            border
            border-white/20
            hover:bg-white
            hover:text-black
            transition-all
            "
          >
            Let's Connect
          </a>
        </div>

        {/* Social Links */}

        <div
          className="
          flex
          justify-center
          gap-8
          text-4xl
          mt-12
          "
        >
          <a
            href="https://github.com/aditya-yadav-75"
            target="_blank"
            rel="noreferrer"
            className="
            hover:text-blue-400
            transition-all
            hover:scale-110
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/adityayadav75official/"
            target="_blank"
            rel="noreferrer"
            className="
            hover:text-blue-400
            transition-all
            hover:scale-110
            "
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Stats */}

        <div
          className="
          grid
          grid-cols-3
          gap-12
          mt-20
          max-w-xl
          mx-auto
          "
        >
          <div>
            <h3
              className="
              text-4xl
              font-bold
              text-blue-400
              "
            >
              25+
            </h3>

            <p className="text-gray-400">
              Major Projects
            </p>
          </div>

          <div>
            <h3
              className="
              text-4xl
              font-bold
              text-purple-400
              "
            >
              15+
            </h3>

            <p className="text-gray-400">
              Technologies
            </p>
          </div>

          <div>
            <h3
              className="
              text-4xl
              font-bold
              text-cyan-400
              "
            >
              200+
            </h3>

            <p className="text-gray-400">
              Problems Solved
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;