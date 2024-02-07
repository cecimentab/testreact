import './App.css';
import {useState} from 'react';

function useInput(iniValue) {
  const [value, setValue] = useState(iniValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(iniValue)
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    console.log(`${titleProps.value}, ${colorProps.value}`)
    resetTitle();
    resetColor();
  }
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type = "text"
        placeholder="color title.."
      />
      <input 
        {...colorProps}
        type="color" 
      />
      <button>ADD</button>
    </form>
  );
}

export default App;

/* *** Libraries
  ----Formik 
  ----UseHooks
*/
