import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

const Modal = props => {
    const {isShowing, hide, title, text, reset} = props;

    const btnReset = () => {
        reset();
        hide();
    };

    return isShowing ? (
        <>
            <div className={"modal-overlay"}>
                <div className={"modal-wrapper"}>
                    <div className={"modal"}>
                        <h3>{title}</h3>
                        <svg
                            width={"63"}
                            height={"48"}
                            viewBox={"0 0 63 48"}
                            fill={"none"}
                            xmlns={"http://www.w3.org/2000/svg"}>
                            <path
                                fillRule={"evenodd"}
                                clipRule={"evenodd"}
                                d={
                                    "M61.6527 1.1241C62.6887 2.0368 62.7887 3.61655 61.876 4.65258L24.876 46.6526C24.3877 47.2069 23.6793 47.5168 22.9408 47.4993C22.2023 47.4818 21.5094 47.1386 21.0479 46.5617L1.04792 21.5617C0.185396 20.4836 0.3602 18.9104 1.43835 18.0478C2.51651 17.1853 4.08974 17.3601 4.95226 18.4383L23.0923 41.1133L58.1242 1.34742C59.0369 0.311394 60.6166 0.21141 61.6527 1.1241Z"
                                }
                                fill={"#1CAD45"}
                            />
                        </svg>
                        <p>{text}</p>
                        <div className={"modal__buttons"}>
                            <button
                                type={"button"}
                                className={"modal-close-button"}
                                onClick={btnReset}>
                                {"Reset"}
                            </button>
                            <button
                                type={"button"}
                                className={"modal-close-button"}
                                onClick={hide}>
                                {"Close"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
};

Modal.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default Modal;
