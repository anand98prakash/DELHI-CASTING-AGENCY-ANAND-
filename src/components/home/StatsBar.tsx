"use client";

import { useEffect, useRef, useState } from "react";
import { DCA_STATS } from "@/data/stats";

export function StatsBar() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-[#E2DDD3] bg-[#EFECE4] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {DCA_STATS.map((stat, idx) => (
            <StatCard key={idx} stat={stat} animate={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, animate }: { stat: (typeof DCA_STATS)[0]; animate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const end = stat.value;
    const duration = 1400; // 1.4 seconds
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const currentCount = Math.floor(end * (1 - (1 - progress) * (1 - progress)));
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [animate, stat.value]);

  return (
    <div className="text-center md:text-left">
      <div className="flex items-baseline justify-center font-serif text-4xl font-extrabold tracking-tight text-[#171717] sm:text-5xl md:justify-start md:text-6xl">
        <span>{count}</span>
        <span className="text-[#C5A059]">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#171717]">
        {stat.label}
      </p>
      <p className="mt-1 text-xs text-[#171717]/60">
        {stat.description}
      </p>
    </div>
  );
}
