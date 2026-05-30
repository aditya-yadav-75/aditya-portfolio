import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      mt-20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        "
      >
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
          "
        >
          <h2 className="text-xl font-bold">
            Aditya Yadav
          </h2>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/aditya-yadav-75"
              target="_blank"
              rel="noreferrer"
              className="
              hover:text-blue-400
              transition-all
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
              "
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

        <p
          className="
          text-center
          text-gray-400
          mt-6
          "
        >
          © {new Date().getFullYear()} Aditya Yadav.
          Built with React, Tailwind CSS and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;