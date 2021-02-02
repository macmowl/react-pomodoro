import React, {useEffect, useState} from "react";
import ProgressBar from "./progress/progress-bar";
import Modal from "././modal/modal";
import useModal from "./use-modal";

const Pomodoro = () => {
    const seconds = 3;
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [totalTime, setTotalTime] = useState(seconds);
    const [isPlaying, setIsPlaying] = useState(true);

    const {isShowing: isFormShowed, toggle: toggleForm} = useModal();

    const decrement = () => {
        if (isPlaying === true) {
            setTimeLeft(prevTime => prevTime - 60);
            setTotalTime(prevTime => prevTime - 60);
        }
    };
    const increment = () => {
        if (isPlaying === true) {
            setTimeLeft(prevTime => prevTime + 60);
            setTotalTime(prevTime => prevTime + 60);
        }
    };

    const play = () => setIsPlaying(false);
    const pause = () => setIsPlaying(true);

    const reset = () => {
        setIsPlaying(true);
        setTimeLeft(seconds);
        setTotalTime(seconds);
    };

    useEffect(() => {
        if (!isPlaying) {
            window.interval = setInterval(() => {
                setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);
        } else {
            clearInterval(window.interval);
        }
    }, [isPlaying]);

    useEffect(() => {
        if (timeLeft === 0) {
            setTimeout(() => {
                toggleForm();
            }, 1000);
            // reset()
        }
    }, [timeLeft]);

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const secondsLeft = String(timeLeft % 60).padStart(2, "0");

    return (
        <div className={"container"}>
            <Modal
                isShowing={isFormShowed}
                hide={toggleForm}
                title={"Well done"}
                text={"Zumba time"}
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
            <button type={"button"} onClick={decrement}>
                {"-"}
            </button>
            <button type={"button"} onClick={reset}>
                <svg
                    className={"svgBtn"}
                    width={"23"}
                    height={"23"}
                    viewBox={"0 0 23 23"}
                    fill={"none"}
                    xmlns={"http://www.w3.org/2000/svg"}>
                    <path
                        d={
                            "M3.34339 1.58923C3.29726 0.666562 2.51189 -0.0440082 1.58923 0.00212511C0.666562 0.0482584 -0.0440082 0.833625 0.00212511 1.75629L0.420305 10.1199C0.444912 10.612 0.685248 11.0683 1.07719 11.3669C1.46913 11.6655 1.9728 11.7761 2.4538 11.6693L9.98105 9.99653C10.8829 9.79613 11.4515 8.9026 11.2511 8.00078C11.0507 7.09896 10.1571 6.53035 9.25532 6.73075L6.05933 7.44097C6.37466 6.99267 6.74011 6.57867 7.15028 6.20761C8.16614 5.28859 9.41662 4.66879 10.7631 4.41689C12.1097 4.16499 13.4996 4.29084 14.779 4.78048C16.0584 5.27013 17.1772 6.10445 18.0115 7.19097C18.8458 8.2775 19.3629 9.57381 19.5056 10.9362C19.6484 12.2987 19.411 13.674 18.82 14.9098C18.229 16.1456 17.3073 17.1937 16.1572 17.9378C15.4932 18.3674 14.768 18.686 14.01 18.8849C13.0875 19.127 12.3222 19.8987 12.3449 20.8522C12.3676 21.8057 13.1641 22.5742 14.102 22.4009C15.4968 22.1433 16.8333 21.6143 18.0334 20.8378C19.7191 19.7472 21.0698 18.2112 21.936 16.4C22.8022 14.5888 23.15 12.5732 22.9408 10.5764C22.7317 8.57967 21.9738 6.67983 20.7511 5.08744C19.5284 3.49504 17.8886 2.27229 16.0136 1.55468C14.1386 0.837065 12.1014 0.652626 10.128 1.0218C8.15459 1.39097 6.32191 2.29934 4.83308 3.64623C4.35101 4.08235 3.91109 4.55892 3.5174 5.06944L3.34339 1.58923Z"
                        }
                        fill={"#F95959"}
                    />
                </svg>
            </button>
            <button
                type={"button"}
                onClick={play}
                style={isPlaying ? {display: "inline"} : {display: "none"}}>
                <svg
                    className={"svgBtn"}
                    width={"11"}
                    height={"18"}
                    viewBox={"0 0 11 18"}
                    fill={"none"}
                    xmlns={"http://www.w3.org/2000/svg"}>
                    <path
                        d={
                            "M0 16.7854V1.30679C0 0.43157 1.04483 -0.021365 1.68361 0.576942L10.1968 8.55076C10.6274 8.95408 10.6171 9.6406 10.1745 10.0307L1.66128 17.5355C1.01548 18.1048 0 17.6463 0 16.7854Z"
                        }
                        fill={"#F95959"}
                    />
                </svg>
            </button>
            <button
                type={"button"}
                onClick={pause}
                style={isPlaying ? {display: "none"} : {display: "inline"}}>
                <svg
                    className={"svgBtn"}
                    width={"15"}
                    height={"18"}
                    viewBox={"0 0 15 18"}
                    fill={"none"}
                    xmlns={"http://www.w3.org/2000/svg"}>
                    <path
                        d={"M0.984375 18V0.867188H5.63672V18H0.984375Z"}
                        fill={"#F95959"}
                    />
                    <path
                        d={"M9.35156 18V0.867188H14.0039V18H9.35156Z"}
                        fill={"#F95959"}
                    />
                </svg>
            </button>
            <button type={"button"} onClick={increment}>
                {"+"}
            </button>
        </div>
    );
};

export default Pomodoro;
