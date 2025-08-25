"use client";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";

const Intro: FC = () => {
  const introScope = useRef<HTMLDivElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(introScope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <section
      className="py-24 md:py-32 lg-py-40 mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={introScope}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]" ref={scope}>
          Building beautiful websites with clean code and thoughtful design to
          help your business grow and stand out from the competition.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
