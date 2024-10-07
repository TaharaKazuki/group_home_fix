import { CAROUSEL_IMAGES } from '@/constant';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SliderSection = () => {
  const [positionIndexes, setPositionIndexes] = useState<number[]>([
    0, 1, 2, 3, 4,
  ]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
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
      <div className="flex items-center flex-col justify-center h-screen">
        {CAROUSEL_IMAGES.map((image, i) => (
          <motion.img
            key={i}
            src={image.imageSrc}
            alt={image.imageSrc}
            initial="center"
            animate={positions[positionIndexes[i]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: '40%', position: 'absolute' }}
          />
        ))}
        <div className="flex flex-row gap-3">
          <button
            className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
