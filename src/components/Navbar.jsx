import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navItems = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Education",
      href: "#education",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav
      className="
      fixed
      top-6
      left-0
      right-0
      z-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        flex
        justify-between
        items-center
        "
      >
        {/* Logo */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="
          px-6
          py-3
          rounded-2xl
          bg-white/5
          backdrop-blur-2xl
          border
          border-white/10
          "
        >
          <h1 className="font-bold text-xl">
            aditya.dev
          </h1>
        </motion.div>

        {/* Navigation */}

        <AnimatePresence mode="wait">

          {!scrolled ? (
            <motion.div
              key="pill"
              layout
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
              px-8
              py-4
              rounded-full
              bg-white/5
              backdrop-blur-3xl
              border
              border-white/10
              flex
              items-center
              gap-8
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              "
            >
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="
                  hover:text-blue-400
                  transition-all
                  "
                >
                  {item.title}
                </a>
              ))}

              <button
                onClick={() =>
                  setDarkMode(!darkMode)
                }
              >
                {darkMode ? (
                  <FaSun />
                ) : (
                  <FaMoon />
                )}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="cards"
              layout
              className="
              flex
              gap-3
              "
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: -30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 250,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-3xl
                  border
                  border-white/10
                  shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                  "
                >
                  {item.title}
                </motion.a>
              ))}

              <motion.button
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                whileHover={{
                  rotate: 180,
                }}
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                className="
                p-4
                rounded-2xl
                bg-white/5
                backdrop-blur-3xl
                border
                border-white/10
                "
              >
                {darkMode ? (
                  <FaSun />
                ) : (
                  <FaMoon />
                )}
              </motion.button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;