import React, { useEffect, useState } from "react";

export default function Timmer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const getformattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getformattedTime(time);

  return (
    <div className="text-4xl font-bold flex space-x-10">
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold font-Poppins">Days</span>
        <span>{days}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold font-Poppins">Hours</span>
        <span>{hours}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold font-Poppins">Minutes</span>
        <span>{minutes}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold font-Poppins">Seconds</span>
        <span>{seconds}</span>
      </div>
    </div>
  );
}
