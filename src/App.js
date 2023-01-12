import { useState, useEffect } from 'react';
import style from './style.module.css';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo('');
  };
  const deleteToDo = (index) =>
    setToDos((currentArray) =>
      currentArray.filter((_, currentIndex) => currentIndex !== index)
    );
  return (
    <div className={style.container}>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Please write your main task"
        />
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button className={style.btn} onClick={() => deleteToDo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
