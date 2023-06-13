"use client";
import React, { useState, useEffect } from 'react';


export const LeftMain = () => {
  const [displayToday, setDisplayToday] = useState("");
  const [displayTime, setDisplayTime] = useState("");
  const clock = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = weekday[dayNum];
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const monthStr = month >= 10 ? String(month) : "0" + String(month);
    const dateStr = date >= 10 ? String(date) : "0" + String(date);
    const hourStr = hour >= 10 ? String(hour) : "0" + String(hour);
    const minStr = min >= 10 ? String(min) : "0" + String(min);
    const secStr = sec >= 10 ? String(sec) : "0" + String(sec);
    const today = `${year}.${monthStr}.${dateStr} [${day}]`;
    const time = `${hourStr}:${minStr}:${secStr}`;
    setDisplayToday(today);
    setDisplayTime(time);
  };
  useEffect(() => {
    setInterval(() => {
      clock();
    }, 1000);
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-amber-400 items-center justify-center">
      <div className="flex flex-col gap-1 items-center">
        <div className='text-lg'>
          {displayToday}
        </div>
        <div className="text-5xl">
          {displayTime}
        </div>
      </div>
    </div>
  );
};
