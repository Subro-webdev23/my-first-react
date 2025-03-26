import { useState } from "react";

const HideShow = () => {
    const [isVisible, setIsVisible] = useState(false);
    console.log(isVisible);
    console.log(!isVisible);
    const v = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <button onClick={v}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>Hellow! React Learner!</p>}
        </div>
    );
};

export default HideShow;