import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const AnimatedStat = ({ value, suffix = "", label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  return (
    <div className="stats-box" ref={statRef}>
      <div className="heading">
        {isVisible ? (
          <CountUp end={value} duration={2.5} suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="text">{label}</div>
    </div>
  );
};

export default AnimatedStat;
