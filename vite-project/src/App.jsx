import { useState } from 'react';
function App() {
  return<div>
    <b>
      Hello World
    </b>
    <Counter /> 
  </div>

}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  } 
  function decreaseCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }


  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button>
  </div>

// the thing to learn is that we have not done any DOM manipulation here
// we are just using react hooks to update the state
// and then we are using the state to render the DOM
}
export default App;