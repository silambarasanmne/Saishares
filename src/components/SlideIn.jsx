import React, { useEffect, useRef, useState } from 'react';

/**
 * SlideIn Component
 * Wraps elements and animates them sliding in when scrolled into view.
 * Automatically resets when scrolled away so it smoothly re-animates on return.
 * Uses hardware-accelerated transforms for peak performance.
 */
export default function SlideIn({ children, delayMs = 0, className = '', direction = 'left' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const el = domRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const getTransformValue = () => {
    switch (direction) {
      case 'right':
        return 'translateX(40px)';
      case 'up':
        return 'translateY(25px)';
      case 'left':
      default:
        return 'translateX(-40px)';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transform: isVisible ? 'translate(0, 0)' : getTransformValue(),
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${isVisible ? delayMs : 0}ms, opacity 0.35s ease-out ${isVisible ? delayMs : 0}ms`,
        willChange: 'transform, opacity',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
