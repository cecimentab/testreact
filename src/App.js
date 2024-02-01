import './App.css';
// import { useReducer } from 'react';
import { useRef } from 'react';

function App() {
  // const [checked, s etCheck] = useReducer((checked) => !checked, false);
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    console.log(`${title}, ${color}`)
  }
  return (
    // **useReducer**
    // <div className="App">
    //   <header className="App-header">
    //     <input type="checkbox" value={checked} onChange={setCheck} />
    //     <label>{checked ? "checked" : "not checked"}</label>
    //   </header>
    // </div>

    //**useRef */
    <form onSubmit={submit}>
      <input
        ref={txtTitle}
        type = "text"
        placeholder="color title.."
      />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
