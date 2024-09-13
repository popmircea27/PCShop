import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { 
    rotate: 0,
    transition: { duration: 1 }
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  }
};

const pathVariants2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
      delay: 0.5
    }
  }
};

const Logo = () => {
  return (
    <motion.svg 
      width="75px" 
      height="75px" 
      viewBox="-4.8 -4.8 57.60 57.60" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="#000000"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <g strokeWidth="0"/>
      <g strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"/>
      <g>
        <motion.path 
          d="M31.6155,10.5584A1.1264,1.1264,0,0,0,30.2591,9.84c-1.0449.2613-10.6278,8.1129-4.9636,14.7689,4.476,5.26,14.2116-6.6878,14.2116-6.6878"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path 
          d="M20.4713,22.362c.505,3.1,3.1523,13.6717,5.3293,12.2784S22.8149,24.7689,19.74,22.9368c-3.3033-1.9681-11.0593-3.669-11.245-5.4281-.1979-1.8734,15.4945-9.306,18.2114-3.75s-6.5136,11.46-6.5136,11.46"
          variants={pathVariants2}
          initial="hidden"
          animate="visible"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="13.2087" y="4.5" width="21.5825" height="39" stroke="#000000" fill="none"/>
      </g>
    </motion.svg>
  );
}

export default Logo;
