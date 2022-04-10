import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, incremnet } from './features/counter/counterSlice';

function App() {
  // Store 
  // Action
  // Reducer
  // Dispatch
  const count = useSelector((state) => state.counter.value)

  const dispatch=useDispatch()
  return (
    <div className="App">
        <h3>  Wellcome to react Redux Crash Course 2022</h3>
        <p>Naimur Rahman D </p>

        <p>Counter:{count}</p>
        <button onClick={()=>dispatch(incremnet())}>+++</button>
        <button onClick={()=>dispatch(decrement())} style={{marginLeft:"20px"}}>__</button>
    </div>
  );
}

export default App;
