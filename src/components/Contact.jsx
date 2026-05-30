import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-5xl font-bold mb-12">
          Contact Me
        </h2>

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          "
        >
          <input
            type="text"
            placeholder="Your Name"
            className="
            w-full
            mb-4
            p-4
            rounded-xl
            bg-black/20
            outline-none
            "
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
            w-full
            mb-4
            p-4
            rounded-xl
            bg-black/20
            outline-none
            "
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            outline-none
            "
          />

          <button
            className="
            mt-6
            bg-blue-600
            px-8
            py-3
            rounded-xl
            hover:scale-105
            transition-all
            "
          >
            Send Message
          </button>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;