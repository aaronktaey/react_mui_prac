import ComboBox from "./ComboBox";
import Navigation from "./Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navigation className="App-item"/>
      <canvas className="App-item" style={{backgroundColor:"red"}}></canvas>
      <Navigation className="App-item"/>
      <canvas className="App-item" style={{backgroundColor:"blue"}}></canvas>
      <Navigation className="App-item"/>
    </div>
  );
}

export default App;
