import { useState , useEffect } from 'react';
function App() {
  return<div>
    <b>
      Hello World
    </b>
    <Counter /> 
  </div>

}
// useEffect is a react hook that allows us to run a function after the component has been rendered
// set Interval sets the interval for the function 
// mounting , re-rendering , unmounting
function Counter() {
  const [count, setCount] = useState(0);

  // hooking into the lifecycle events of react
  console.log('counter');
  useEffect(function (){
    setInterval(function(){
      setCount(function(count){
        return count + 1; 
      })
      
    }, 1000);
    console.log("mounting")
  },[]);



 
  

  return <div>
    <h1 id="text">{count}</h1>
   
    
  </div>

// the thing to learn is that we have not done any DOM manipulation here
// we are just using react hooks to update the state
// and then we are using the state to render the DOM
}
export default App;