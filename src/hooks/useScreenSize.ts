import { useEffect, useState } from "react";

// https://usehooks.com/useWindowSize/
export default function useWindowSize() {

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    breakpoint: ""
  });

  const calculateBreakPoint = (windowHeight: number) => {
      if(windowHeight < 600) {
        return 'xs';
      } else if(windowHeight >= 600 && windowHeight < 960) {
        return 'sm'
      } else if(windowHeight >= 960 && windowHeight < 1264) {
        return 'md'
      } else if(windowHeight >= 1264 && windowHeight < 1904) {
        return 'lg'
      } else if(windowHeight >= 1904) {
        return 'xl'
      } else {
        return ''
      }
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: calculateBreakPoint(window.innerWidth)
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}