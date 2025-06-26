import React, { useState } from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    return (
        <div className="counter flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className='text-2xl p4'>Counter</h1>
            <p className='text-2xl font-semibold'>{count}</p>
            <button className='border-2 bg-green-600 px-2.5 rounded-lg p-2 text-xl text-white shadow-2xl cursor-pointer hover:bg-green-700' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='border-2 bg-red-600 rounded-lg p-2 text-xl text-white shadow-2xl cursor-pointer hover:bg-red-700' onClick={() => setCount(count - 1)}>Decrement</button>
            <button className='border-2 bg-orange-500 px-8 rounded-lg p-2 text-xl text-white shadow-2xl cursor-pointer hover:bg-orange-600' onClick={() => setCount(0)}>Reset</button>
        </div>
    );

}

export default Counter;