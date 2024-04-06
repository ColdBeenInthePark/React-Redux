import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./store/counterSlice";
import SecondComponent from "./page/secondComponent";

function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
      <div>
          <p>FirstComponent</p>
          <button onClick={() => {
              dispatch(increment())
          }}>increment
          </button>
          <button onClick={() => {
              dispatch(decrement())
          }}>decrement
          </button>
          <p>countValue : {count}</p>
          <SecondComponent/>
      </div>
  );
}

export default App;
