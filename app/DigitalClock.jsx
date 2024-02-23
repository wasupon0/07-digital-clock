"use client";
import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    //const meridiem = hours >= 12 ? "PM" : "AM";

    return `${hours}:${minutes}`;
  }

  function formatSeconds() {
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `:${seconds}`;
  }

  function formatDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let formattedDate = `${daysOfWeek[time.getDay()]}, ${time.getDate()} ${
      months[time.getMonth()]
    } ${time.getFullYear()}`;

    return formattedDate;
  }

  return (
    <>
      <div>
        <span
          className={`font-my1Font text-slate-200 font-black  tracking-tighter text-biggest`}
        >
          {formatTime()}
        </span>
        <span className="font-my1Font pl-8 text-9xl text-red-400 tracking-normal">
          {formatSeconds()}
        </span>
      </div>

      <br />
      <br />
      <br />

      <div
        className={`font-my1Font text-yellow-400 font-bold text-center shadow-black text-7xl tracking-tighter`}
      >
        <span>{formatDate()}</span>
      </div>
    </>
  );
}
