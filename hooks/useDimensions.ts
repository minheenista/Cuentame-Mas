import { useState, useEffect } from "react";

// Define el ancho máximo que se considera como mobile
const MOBILE_WIDTH = 880;

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    isMobile: window.innerWidth <= MOBILE_WIDTH,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        isMobile: window.innerWidth <= MOBILE_WIDTH,
      });
    };

    // Agregar el listener para el evento resize
    window.addEventListener("resize", handleResize);

    // Limpiar el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
