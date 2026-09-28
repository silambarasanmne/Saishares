import React, { useEffect, useRef, useState } from 'react';

/**
 * SlideIn Component — Premium scroll-reveal
 * Animates elements with blur + translate + opacity on viewport entry.
 * Uses hardware-accelerated transforms + filter for peak performance.
 * Resets on exit so it re-triggers cleanly when returning.
 */
export default function SlideIn({ children, delayMs = 0, className = '', direction = 'left' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

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
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
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
        return 'translateX(48px)';
      case 'up':
        return 'translateY(32px)';
      case 'down':
        return 'translateY(-32px)';
      case 'left':
      default:
        return 'translateX(-48px)';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transform: isVisible ? 'translate(0, 0)' : getTransformValue(),
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        transition: `transform 0.7s cubic-bezier(0.32, 0.72, 0, 1) ${isVisible ? delayMs : 0}ms, opacity 0.6s ease-out ${isVisible ? delayMs : 0}ms, filter 0.6s ease-out ${isVisible ? delayMs : 0}ms`,
        willChange: 'transform, opacity, filter',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
