import { useDispatch, useSelector } from "react-redux";

/* useSelector is a react-hook 
that lets your component access data from the redux store
useDispatcher is a react redux hook that lets your react 
component send actions to the redux store
*/
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count in Counter Component:{count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
