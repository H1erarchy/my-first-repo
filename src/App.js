import './App.css';
import { useState } from 'react';
import MoleContainer from './Componets/MoleContainer';


function App() {


  //Score: variable
  //SETSSCORE: function that update the variable score
  //0: initial calue and data type of score

  let [score, setScore] = useState(0)


  //=> automatically binds the key word "this"
  const createMoleHill = ()=> {
    let hills = []
    const MOLEHILLS=9;
    for (let i =0; i < MOLEHILLS; i++){
      hills.push(<MoleContainer
        key ={i}
        setScore={setScore}
        score={score}
        />)
    }
    return <div>{hills}</div>;
  };

  
  return (
    <div> 
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
