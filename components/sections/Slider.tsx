import { CAROUSEL_IMAGES } from '@/constant';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SliderSection = () => {
  const [positionIndexes, setPositionIndexes] = useState<number[]>([
    0, 1, 2, 3, 4,
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
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

  const handleIndicatorClick = (index: number) => {
    setPositionIndexes((prevIndexes) => {
      const offset = (index - activeIndex + CAROUSEL_IMAGES.length) % 5;
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + offset) % 5
      );
      return updatedIndexes;
    });
    setActiveIndex(index);
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
    <section>
      <div className="flex items-center flex-col justify-center h-screen relative">
        {CAROUSEL_IMAGES.map((image, i) => (
          <motion.img
            key={i}
            src={image.imageSrc}
            alt={image.imageSrc}
            initial="center"
            animate={positions[positionIndexes[i]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: '30%', position: 'absolute' }}
          />
        ))}
        <div className="absolute bottom-10 flex gap-2">
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
              className={`size-2 rounded-full ${
                activeIndex === index ? 'bg-red-300' : 'bg-gray-400'
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
