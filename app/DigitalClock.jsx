"use client";
import React, { useState, useEffect, useRef } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Check if it's the first load
    if (!localStorage.getItem("pageLoaded")) {
      // Set a flag to indicate the page has been loaded
      localStorage.setItem("pageLoaded", "true");
      // Refresh the page
      location.reload();
    }
  }, []);

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
          className={`font-my1Font text-slate-100 font-black  tracking-tight text-biggest`}
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
