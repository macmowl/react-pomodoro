import React, {useState} from "react";
import ProgressBar from "./progress/progress-bar";

const Pomodoro = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className={"container"}>
            <h1>{"Pomodoro"}</h1>
            <ProgressBar
                progress={count}
                size={300}
                strokeWidth={15}
                circleOneStroke={"#F95959"}
                circleTwoStroke={"#FEDEDE"}
            />
            <button onClick={increment}>{"Start"}</button>
        </div>
    );
};

export default Pomodoro;
