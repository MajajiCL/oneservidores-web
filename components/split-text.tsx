"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  highlight?: string[];
  delay?: number;
  per?: "word" | "char";
};

export function SplitText({ text, className = "", highlight = [], delay = 0, per = "word" }: Props) {
  const reduce = useReducedMotion();
  const parts = per === "word" ? text.split(" ") : text.split("");
  const isHighlight = (token: string) =>
    highlight.some((h) => token.toLowerCase().replace(/[.,!?]/g, "") === h.toLowerCase());

  return (
    <span className={className}>
      {parts.map((token, i) => (
        <motion.span
          key={`${token}-${i}`}
          initial={reduce ? false : { y: "100%", opacity: 0 }}
          animate={reduce ? undefined : { y: "0%", opacity: 1 }}
          transition={{
            duration: 0.55,
            delay: delay + i * (per === "word" ? 0.06 : 0.018),
            ease: [0.22, 0.61, 0.36, 1]
          }}
          style={{ display: "inline-block", overflow: "hidden", whiteSpace: "pre" }}
        >
          <span className={isHighlight(token) ? "text-gradient-brand" : ""}>
            {token}
          </span>
          {per === "word" && i < parts.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
