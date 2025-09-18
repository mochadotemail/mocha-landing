"use client"
import { useState, useEffect } from 'react';

export const MailDivider = ({ 
  width = 120, 
  speed = 80, 
  char = '-',
  className = '' 
}) => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        const newPosition = prevPosition + direction;
        
        // Change direction when reaching the ends
        if (newPosition >= width - 1) {
          setDirection(-1);
          return width - 1;
        } else if (newPosition <= 0) {
          setDirection(1);
          return 0;
        }
        
        return newPosition;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [width, speed, direction]);

  const createLine = () => {
    const line = Array(width).fill(char);
    line[position] = '✉';
    return line.join('');
  };

  return (
    <div className={`font-mono text-neutral-500/30 text-center my-4 select-none ${className}`}>
      &gt;{createLine()}&lt;
    </div>
  );
};
