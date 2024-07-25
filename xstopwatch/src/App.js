import React, {useState, useEffect, useRef} from 'react';


function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);


  useEffect(()=>{
    if(isRunning){
      timerRef.current = setInterval(()=>{
        setTime(prevTime => prevTime +1);
      },1000);
    }else{
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);


  function formateTime (time){
    const min = Math.floor(time/60);
    const sec = time % 60;

    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }

  function handleStartStop(){
    setIsRunning(!isRunning);
  }

  function handleReset(){
    setIsRunning(false);
    setTime(0);
  }

  return (
    <div className=''>
      <h1>Stopwatch</h1>
      <p>Time: {formateTime(time)}</p>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>

     
    </div>
  );
}

export default App;
