"use client";
import { useEffect, useRef } from 'react';
import useMousePosition from '../hooks/useMousePosition';

  const Spotlight = () => {
    const mousePosition = useMousePosition();
    const spotlightElem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spotlightElem.current) spotlightElem.current.style.background = `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
  }, [mousePosition]);

    return (
        <div ref={spotlightElem} className="pointer-events-none fixed inset-0 z-30 transition duration-300" style={{background: "radial-gradient(600px at 1182px 51px, rgba(29, 78, 216, 0.15), transparent 80%)"}}></div>
    );
}

export default Spotlight;