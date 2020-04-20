import React ,{useState} from "react";
import "./styles.css";

export default function App() {

  //declare a count variable 
  const [count , setCount] = useState(0);
  return (
    <div className="App">
      <h1>React Hooks Sampling: Soji</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=> setCount(count+1)}> Increment Count</button>
    </div>
  );
}


