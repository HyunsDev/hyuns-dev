import { motion } from "framer-motion";

export function AnimatedText({ text }: { text: string }) {
  return (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ scale: 0.8 }}
      animate={{ scale: [0.8, 1] }}
      transition={{
        duration: 2.4,
        ease: [0.2, 1, 0.2, 1],
        times: [0, 0.6],
      }}
    >
      {text.split("\n").map((text, index) => (
        <div key={index} className="flex items-center justify-center">
          {Array.from(text).map((char, index) => (
            <motion.span
              key={index}
              className="text-2xl rounded min-w-[6px]"
              animate={{
                color: [
                  "#2a41c3",
                  "#8d2ac3",
                  "#eab308",
                  "#ffffff",
                  "#ffffff",
                  "#eab308",
                  "#8d2ac3",
                  "#2a41c3",
                ],
              }}
              transition={{
                opacity: {
                  duration: 4,
                  times: [0, 0.3, 0.9, 1],
                  repeat: Infinity,
                  delay: index * 0.04,
                },
                color: {
                  duration: 4,
                  times: [0, 0.1, 0.2, 0.3, 0.7, 0.8, 0.9, 1],
                  repeat: Infinity,
                  delay: index * 0.04,
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
