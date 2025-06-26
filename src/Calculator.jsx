
import React, {useState, useEffect} from "react";
function Calculator() {
   
    const [screen, setScreen] = useState("");

    const calculate = React.useCallback(() => {
        try {
            const result = eval(screen);
            setScreen(result.toString());
        } catch {
            setScreen("N/A");
        }
    }, [screen]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;
            if (key >= 0 && key <= 9) {
                setScreen((prev) => prev + key);
            } else if (key === "+" || key === "-" || key === "*" || key === "/") {
                setScreen((prev) => prev + key);
            }
            else if (key === "Enter") {
                calculate();
            } else if (key === "Backspace") {
                setScreen((prev) => prev.slice(0, -1));
            }
            else if (key === "Escape") {
                resetScreen();
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [calculate]);

    

    const updateScreen = (e) => {
        const value = e.target.innerText;
        setScreen((prev) => prev + value);}

    const resetScreen = () => {
        setScreen("");
    }

    



    return (
        <div className="calculator flex flex-col mt-40 ml-170 w-80  items-center justify-center rounded-lg bg-gray-600 text-zinc-300">
            <div className="bg-gray-400 text-white p-4 w-70 h-15 mt-5 text-right text-xl font-semibold">{screen}</div>
            <div className="grid grid-cols-4 gap-6 mt-5 text-2xl ">
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">7</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">8</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">9</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">/</button>
            </div>
            <div  className="grid grid-cols-4 gap-6 mt-5 text-2xl ">
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">4</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">5</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">6</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">*</button>
            </div>
            <div  className="grid grid-cols-4 gap-6 mt-5 text-2xl ">
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">1</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">2</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">3</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">+</button>
            </div>
            <div  className="grid grid-cols-4 gap-6 mt-5 text-2xl ">
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">0</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">.</button>
                <button onClick={calculate} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">=</button>
                <button onClick={updateScreen} className= "py-2 px-4 hover:border-gray-400 border-2 border-gray-600 ">-</button>
            </div>
            <div className="mt-3 text-2xl">
                <button onClick={resetScreen} className= "rounded-lg py-2 border-orange-500 hover:border-zinc-300 border-2 bg-orange-500 px-20 mb-4 font-semibold">Clear</button>
            </div>
           
        </div>
    )
}

export default Calculator;