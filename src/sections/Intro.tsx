"use client";

import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [introScope, introAnimate] = useAnimate();
  const inView = useInView(introScope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(introScope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [introScope]);

  useEffect(() => {
    if (inView) {
      introAnimate(
        introScope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0)",
        },
        {
          duration: 0.5,
          delay: stagger(0.18),
        }
      );
    }
  }, [inView, introAnimate, introScope]);

  return (
    <section
      className="py-24 md:py-32 lg-py-40 mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={introScope}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautiful websites with clean code and thoughtful design to
          help your business grow and stand out from the competition.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
