import { useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const setResize = () => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  };

  const delResize = () => {
    window.removeEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  };

  return {
    windowSize, setWindowSize, setResize, delResize,
  };
}
