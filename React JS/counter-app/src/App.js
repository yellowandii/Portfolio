import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="conrainer my-5">
      <div className="card text-center my-5">
        <div className="card-body">

          <h1>Counter App</h1>

          <div className="my-5">
            <h2 className="my-5">{count}</h2>

            <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>
            Increment
            </button>

            <button className="btn btn-success mx-3" onClick={() => setCount(count + 5)}>
            +5
            </button>

            <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)}>
            Decrement
            </button>

            <button className="btn btn-danger mx-3" onClick={() => setCount(count - 2)}>
            -2
            </button>

            <button className="btn btn-secondary mx-3" onClick={() => setCount(0)}>
            Reset
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
