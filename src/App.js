import {CounterClass} from "./components/CounterClass";
import Todo from "./components/Todo";


function App() {
  return (
    <div className="App">
      <CounterClass inCount ={5}/>
        <Todo/>
        <Todo/>
    </div>
  );
}

export default App;
