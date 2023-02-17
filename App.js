import logo from './logo.svg';
import './App.css';
import FuntionalComponent from './components/FuntionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <FuntionalComponent name="Deepu" skills='React'/>
      <ClassComponent />
    </div>
  );
}

export default App;
