// src/components/Banner.jsx
import { useState, useEffect } from 'react';

function Banner({ content }) {
  const [timeLeft, setTimeLeft] = useState(content.timer);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            setTimerExpired(true);
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Helper function to format time in hh:mm:ss
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-lg w-1/2 mx-auto mb-6">
      <p className="text-xl font-semibold mb-4">{content.description}</p>
      {timerExpired && content.link && (
        <a href={content.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline block mb-4 text-lg">
          {content.link}
        </a>
      )}
      <div className="text-center">
        <p className="text-2xl font-bold">Time Left:</p>
        <p className="text-4xl font-bold">{formatTime(timeLeft)}</p>
      </div>
    </div>
  );
}

export default Banner;
