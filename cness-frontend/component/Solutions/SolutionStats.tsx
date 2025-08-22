"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Stat {
  id: number;
  value: string;
  desc: string;
}

interface StatSectionProps {
  data: Stat[];
}

// ✅ Reusable smooth count-up hook
const useCountUp = (end: number, start: boolean, duration = 2000) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * end));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, start, duration]);

  return value;
};

const SolutionStats: React.FC<StatSectionProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 px-4 md:px-10">
      {data.map((stat, index) => {
        const { id, value, desc } = stat;

        const firstChar = value.charAt(0);
        const lastChar = value.charAt(value.length - 1);

        const startsWithDollar = firstChar === "$";

        // Extract numeric part
        const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

        const [inView, setInView] = useState(false);
        const count = useCountUp(numericValue, inView);

        return (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => setInView(true)}
            className="p-6 flex flex-col items-start text-start border-l border-gray-300"
          >
            <h3 className="text-3xl font-[450] bg-active rounded-xl p-2">
              {startsWithDollar ? (
                <>
                  <span className="text-tertiary">{firstChar}</span>
                  {count}
                  <span className="text-tertiary">{lastChar}</span>
                </>
              ) : (
                <>
                  {count}
                  <span className="text-tertiary">{lastChar}</span>
                </>
              )}
            </h3>
            <p className="mt-2 text-gray-600">{desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SolutionStats;
