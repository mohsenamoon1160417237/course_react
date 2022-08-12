import {useRef, useState} from "react";

import "../css/Counter.css";
import "../css/global/small-button.css";


const Counter = () => {

  const showNumberRef = useRef();
  const [number, setNumber] = useState(0);


  const onStartCountClick = async () => {

    const showNumber = showNumberRef.current;
    const sleep = ms => new Promise(res => setTimeout(res, ms));

    for(let i=number; i>=0; i--){
      showNumber.innerHTML = i;

      if(i%2 === 0){
        showNumber.style.color = "black";
      } else{
        showNumber.style.color = "red";
      }
      await sleep(1000);
    }
  }

    return(
      <div id="counter">
        <div id="counter-two">
          <input type="text" id="input-counter" onChange={e => setNumber(e.target.value)} />
          <button onClick={onStartCountClick} id="small-button">Start</button>
        </div>
        <span id="show-number" ref={showNumberRef}></span>
      </div>
    );
}

export default Counter;
