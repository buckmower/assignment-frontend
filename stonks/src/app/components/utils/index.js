import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
    if (typeof window === 'undefined') {
      return 0;
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return windowWidth;
};

export { useWindowWidth };