import React,{useContext} from "react";
import "./css/App.css"
import { context } from "./context/context";

function App() {
  const { count, setCount } = useContext(context);
  return (
    <>
      <h1 className="App" onClick={()=> setCount(count+1)}>Develorment in.. {count}</h1>
    </>
  );
}

export default App;
