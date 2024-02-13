import { useState, useEffect, useRef } from "react";

export default function InView(ref, once) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useRef();
  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
  }, []);

  useEffect(() => {
    // If 'once' is enabled then update only if it's false
    if (once) {
      if (!isIntersecting) {
        observer.current.observe(ref.current);
      }
    } else {
      observer.current.observe(ref.current);
    }
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.current.disconnect();
    };
  });

  return isIntersecting;
}
