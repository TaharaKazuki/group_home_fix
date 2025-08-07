'use client';

import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // スクロール位置を監視
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 上部にスクロール
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-red-300 text-white shadow-lg transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
      aria-label="トップへ戻る"
    >
      <FaAngleUp size={20} />
    </button>
  );
};

export default ScrollToTop;
