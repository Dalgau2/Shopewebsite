import React, { useEffect } from 'react';
import App from '../App';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
    
    </>
  );
};

export default ScrollTop;