import { useState } from "react"

export default function CounterApp() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4 p-5">
            <h2 className="text-2xl font-bold">Count:{counter} </h2>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-red-500  rounded-md" onClick={() => setCounter(counter + 1)}>Increase</button>
                <button className="px-4 py-2 bg-blue-500  rounded-md" onClick={() => setCounter(counter - 1)}>Decrease</button>
                <button className="px-4 py-2 bg-red-500  rounded-md" onClick={() => setCounter(0)}>Reset</button>
            </div>
        </div>
    )
}














