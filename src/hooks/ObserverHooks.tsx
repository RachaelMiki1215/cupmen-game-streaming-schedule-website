import { useState, useEffect } from "react";

const useObserver = (
  containerRef: any,
  onIntersect?: () => void,
  onNotIntersect?: () => void,
  observerOptions?: object
) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      observerOptions
        ? observerOptions
        : {
            rootMargin: "-200px",
          }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      if (onIntersect) {
        onIntersect();
      } else {
        containerRef.current.childNodes.forEach((ch: any) => {
          ch.style.transform = "translateX(0)";
        });
      }
    } else {
      if (onNotIntersect) {
        onNotIntersect();
      } else {
        containerRef.current.childNodes.forEach((ch: any) => {
          ch.style.transform = "translateX(2000px)";
        });
      }
    }
  }, [isIntersecting]);
};

export { useObserver };
