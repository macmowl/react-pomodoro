import React, {useState, useEffect} from "react";
import Commands from "./commands";
import Modal from "././modal/modal";
import useModal from "./use-modal";
import ProgressBar from "./progress/progress-bar";

function App() {
    const seconds = 1200;
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [totalTime, setTotalTime] = useState(seconds);
    const {isShowing: isFormShowed, toggle: toggleForm} = useModal();
    const reset = () => {
        setTimeLeft(totalTime);
        setTotalTime(totalTime);
    };

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const secondsLeft = String(timeLeft % 60).padStart(2, "0");

    useEffect(() => {
        if (timeLeft === 0) {
            setTimeout(() => {
                toggleForm();
            }, 1000);
        }
    }, [timeLeft]);

    return (
        <main>
            <div className={"container"}>
                <Modal
                    isShowing={isFormShowed}
                    hide={toggleForm}
                    title={"Well done"}
                    text={"🎉 Zumba time 🎉"}
                    reset={reset}
                />
                <h1>{"Pomodoro"}</h1>
                <ProgressBar
                    progress={timeLeft}
                    size={300}
                    strokeWidth={15}
                    circleOneStroke={"#FEDEDE"}
                    circleTwoStroke={"#F95959"}
                    total={totalTime}
                />
                <h2>{`${minutes}:${secondsLeft}`}</h2>
                <Commands
                    setTimeLeft={setTimeLeft}
                    setTotalTime={setTotalTime}
                    timeLeft={timeLeft}
                    totalTime={totalTime}
                />
            </div>
        </main>
    );
}
export default App;
