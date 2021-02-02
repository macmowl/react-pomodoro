import React, {useEffect, useState, useRef} from "react";
import "./progressBar.css";
import tail from "../assets/tail.svg";

const ProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
        total,
    } = props;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = (progress / total) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = "transition: stroke-dashOffset 1000ms linear";
    }, [setOffset, circumference, progress, offset]);

    return (
        <div className={"progressbar"}>
            <img className={"progressbar__tail"} src={tail} alt={"tail"} />
            <svg className={"svg"} width={size} height={size}>
                <circle
                    className={"svg-circle-bg"}
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className={"svg-circle"}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    ref={circleRef}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
        </div>
    );
};

export default ProgressBar;
