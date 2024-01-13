'use client'
import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";
// @ts-ignore
import AOS from 'aos';

const millisecond = 1
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

interface TimerProps {
  isPlaying: boolean;
  size: number;
  strokeWidth: number;
}

interface RenderTimeProps {
  dimension: string;
  time: number;
}

const timerProps: TimerProps = {
  isPlaying: true,
  size: 200,
  strokeWidth: 6,
};

const renderTime = ({ dimension, time }: RenderTimeProps) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};
const getTimeMilliseconds = (time: number) => (millisecond - (-time * 60)) | 0;
const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

export const CountdownTimer = () => {

  useEffect(() => {
    const AOS = require('aos');
    AOS.init();
  }, []);

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = new Date('2024-02-04T00:00:00').getTime() / 1000; // Unix timestamp for 04-02-2034

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="border flex xsMax:flex-col xsMax:items-center xsMax:gap-y-[15px] border-website-darkBlue justify-center gap-x-[50px]">


      <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}

      >
        {({ elapsedTime, color }) => (
          <span style={{ color }} >
            {renderTime({ dimension: "Days", time: getTimeDays(daysDuration - elapsedTime) })}
          </span>
        )}

      </CountdownCircleTimer>



      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime({ dimension: "Hours", time: getTimeHours(daySeconds - elapsedTime) })}
          </span>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime({ dimension: "Minutes", time: getTimeMinutes(hourSeconds - elapsedTime) })}
          </span>
        )}
      </CountdownCircleTimer>

      {/* <CountdownCircleTimer
        {...timerProps}
        colors="#3C90C6" // Choose a color for seconds
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > millisecond,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime({ dimension: "Seconds", time: getTimeSeconds(elapsedTime) })}
          </span>
        )}
      </CountdownCircleTimer> */}
    </div>
  );
};
