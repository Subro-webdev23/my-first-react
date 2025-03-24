import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const handelAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const countStyle = {
        border: '2px solid yellow'
    }
    return (
        <div className={countStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handelAdd}>Add</button>
        </div>

    )
}