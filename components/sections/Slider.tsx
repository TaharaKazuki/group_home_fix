import { CAROUSEL_IMAGES } from '@/constant';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SliderSection = () => {
  const [positionIndexes, setPositionIndexes] = useState<number[]>([
    0, 1, 2, 3, 4,
  ]);
  const [_, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
    setActiveIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
  };

  const positions = ['center', 'left1', 'left', 'right', 'right1'];

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
  };

  return (
    <section className="relative">
      <div className="flex items-center flex-col justify-center lg:h-[60vh] h-[45vh]">
        {CAROUSEL_IMAGES.map((image, i) => (
          <motion.img
            key={i}
            src={image.imageSrc}
            alt={image.imageSrc}
            initial="center"
            animate={positions[positionIndexes[i]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            className="absolute w-[80%] lg:w-[40%]"
          />
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
