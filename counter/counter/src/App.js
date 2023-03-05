import {useState} from "react";


function App() {
  const [students, setStudents] = useState(10)



  return (
    <div>
      <h1>I love my classmates</h1>
      <button onClick = {() =>setStudents(students+1)}>
        add
      </button>
      <button onClick = {() =>setStudents(students-1)} >
        subtract
      </button>
      <div>
        {students}
      </div>
    </div>

  );
}

export default App;
