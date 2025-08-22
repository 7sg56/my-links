import { motion } from "framer-motion";

export default function Title() {
  const text = "Sourish".split("");

  return (
    <h1 className="flex gap-1 text-6xl font-bold text-white">
      {text.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
          className="relative"
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}
