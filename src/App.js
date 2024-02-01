import './App.css';
import { useReducer } from 'react';

function App() {
  const [checked, setCheck] = useReducer((checked) => !checked, false);

  return (
    <div className="App">
      <header className="App-header">
        <input type="checkbox" value={checked} onChange={setCheck} />
        <label>{checked ? "checked" : "not checked"}</label>
      </header>
      
    </div>
  );
}

export default App;
