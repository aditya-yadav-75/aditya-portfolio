import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A"
      ) {
        setHovering(true);
      }
    };

    const handleMouseOut = () => {
      setHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
      window.removeEventListener(
        "mouseover",
        handleMouseOver
      );
      window.removeEventListener(
        "mouseout",
        handleMouseOut
      );
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}

      <motion.div
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="
        fixed
        top-0
        left-0
        w-10
        h-10
        rounded-full
        border
        border-blue-400
        pointer-events-none
        z-[9999]
        "
      />

      {/* Inner Dot */}

      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
        className="
        fixed
        top-0
        left-0
        w-2
        h-2
        rounded-full
        bg-blue-400
        pointer-events-none
        z-[9999]
        shadow-[0_0_20px_rgba(59,130,246,1)]
        "
      />
    </>
  );
}

export default CustomCursor;