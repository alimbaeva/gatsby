import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import "../styles/scrollY.module.css";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="scroll-block">
       <div className="scroll-image" style={{width: "300px"}} ref={ref}>
        <img src={`./images/naute_${id}.avif`} alt="nature" />
      </div>
      <motion.h2 style={{ y, width: '35%', color: 'blue', marginLeft: '40%'}}>{`#00${id}`}</motion.h2>
      <motion.p style={{ y,  width: '35%', color: 'blue', marginLeft: '40%'}}>
        When I started to build this site, I knew that I wanted to house a lot of the information on the home 
        page for better search engine optimization. I also knew that I would need some additional real estate 
        for a blog and whatever else I might dream up.
      </motion.p>
    </section>
  );
}
  

const ScrollY = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <>
        {[1, 2, 3, 4, 5].map((image) => (
          <Image id={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </>
    );
};

export default ScrollY;
