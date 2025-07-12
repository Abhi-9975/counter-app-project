import React, { useState } from "react";


function App() {
  var [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-8 border border-gray-200">
        <h1 className="text-8xl text-gray-800 drop-shadow-lg mb-6"> {/* Removed font-extrabold */}
          {count}
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            + {/* Changed from Increment */}
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="w-full sm:w-auto px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            - {/* Changed from Decrement */}
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
            className="w-full sm:w-auto px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
