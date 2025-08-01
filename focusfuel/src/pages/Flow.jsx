import { useState, useEffect, useRef } from "react";

export default function Flow() {

    const[timeLeft, setTimeLeft] = useState(2);
    const intervalRef = useRef(null);

    function startTimer(){
        intervalRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if(prevTime <= 0){
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setTimeLeft((prevTime) => {
                        return prevTime = 2;
                    })
                }
                return prevTime - 1;
            });
        }, 1000);
    }

    function stopTimer() {
        clearInterval(intervalRef.current);
    }

    function resetTimer() {
        setTimeLeft((prevTime) => {
            return prevTime = 2;
        })
    }

    return (
         <div>
            <div className="flex gap-3">
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
            <button onClick={resetTimer}>RESET</button>
            </div>
            <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
            <span>:</span>
            <span>{String(timeLeft % 60).padStart(2, "0")}</span>
         </div>      
    )
}