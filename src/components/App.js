import React, { useRef, useState } from 'react';
import '../styles/App.css';

const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const startTimer = () => {
    startTime.current = Date.now() - currentTime;
    intervalRef.current = setInterval(() => {
      setCurrentTime(Date.now() - startTime.current);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setCurrentTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, currentTime]);
  };

  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{(currentTime / 1000).toFixed(2)}</h1>
        <section className='buttons'>
          <button className="start-btn" onClick={startTimer}>START</button>
          <button className="stop-btn" onClick={stopTimer}>STOP</button>
          <button className="lap-btn" onClick={addLap}>LAP</button>
          <button className="reset-btn" onClick={resetTimer}>RESET</button>
        </section>
      </section>
      <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
          {laps.map((lapTime, index) => (
            <p key={index}>{(lapTime / 1000).toFixed(2)}</

