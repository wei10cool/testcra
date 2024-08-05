//外部套件
import {useEffect, useState} from 'react'; 
// import axios from 'axios';

//專案內套件
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {
  const [text,setText] = useState('');
  const onChangeHandler = (e)=>{
    setText(e.target.value);
  }

  useEffect(()=>{
    (async()=>{
      console.log("build:",process.env.REACT_APP_PATH);
      console.log("all:",process.env.REACT_APP_all);
      // const result =await axios.get(path);
      // console.log(result);
    })();//立即執行
  },[])//[]載入時，只執行一次

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          <button type="button" className="btn btn-primary">Primary</button>
          {text}
          <Input id="sampleText" text="hello" value={text} onChangeHandler={onChangeHandler} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
