import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Nayok() {
  return <div style={{border:'2px solid red'}}>
    <h1>Ami KholNayak</h1>
    <h3>I have done 5 movies</h3>
  </div>
}

export default App;
