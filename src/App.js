import { useState } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';


function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch({type:"INCREMENT"})
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>증가!</button>
    </div>
  );
}

export default App;
