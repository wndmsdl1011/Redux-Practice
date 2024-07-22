import Box from './component/Box';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';


function App() {
  const counter = useSelector(state=>state.counter)

  const dispatch = useDispatch()

  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)

  const increase = () => {
    dispatch({type:"INCREMENT",payload:{num:5}})
  }

  const decrease = () => {
    dispatch({type:"DECREASEMENT"})
  }

  const login = () => {
    dispatch({type:"LOGIN", payload: {id:"nonna",password:"123"}})
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{counter}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={decrease}>감소!</button>
      <button onClick={login}>Login</button>
      <Box/>
    </div>
  );
}

export default App;
