import { useState } from "react"

export default function Batsman() {
    const [run, setRun] = useState(0)
    const handelSingle = () => {
        const newRun = run + 1;
        setRun(newRun);
    }
    const handelDubble = () => {
        const newRun = run + 2;
        setRun(newRun);
    }
    const handelTriple = () => {
        const newRun = run + 3;
        setRun(newRun);
    }
    const handelFour = () => {
        const newRun = run + 4;
        setRun(newRun);
    }
    const handelSix = () => {
        const newRun = run + 6;
        setRun(newRun);
    }



    return (
        <div className="state">
            <h2>Score: {run}</h2>
            {
                (run > 50) && <p>Congratulations! Half Cencury</p>
            }
            {/* if ({run > 50}) {
                <p>Congratulations! Half Cencury</p>
            } */}
            <button onClick={handelSingle}>Single</button>
            <button onClick={handelDubble}>Dubble</button>
            <button onClick={handelTriple}>Triple</button>
            <button onClick={handelFour}>Four</button>
            <button onClick={handelSix}>Six</button>
        </div>
    )



}