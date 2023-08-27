import "./App.css";
import { useRef, useState } from "react";
function App() {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 1,
    hours: 0,
  });
  const InervalID = useRef(null);
  const proverka = ()=>{
    setTime((prev) => {
    const NewTime = Object.assign({}, prev);
    NewTime.seconds -=1;
    if (NewTime.seconds < 0) {
      NewTime.minutes -= 1;
      NewTime.seconds = 59;
    }
    if (NewTime.minutes < 0) {
      NewTime.hours -= 1;
      NewTime.minutes = 59;
    }
    if (NewTime.seconds == 0 && NewTime.minutes == 0 && NewTime.hours == 0) {
      clearInterval(InervalID.current)
      alert("gg")
    }
    return NewTime 
  });
  }
  const add = () => {
    if (!InervalID.current) {
      InervalID.current = setInterval(() => {
        proverka()
    }, 100);
    }
    
  };
  const stop = () => {
    clearInterval(InervalID.current)
    InervalID.current = null;
  }
  return (
    <div>
      <p>
        <span>{time.hours}</span>:<span>{time.minutes}</span>:<span>{time.seconds}</span>
      </p>
      <button onClick={add}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default App;
