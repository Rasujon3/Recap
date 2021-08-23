import logo from './logo.svg';
import './App.css';
import react , {useEffect, useState} from 'react';


function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=> setNayoks(data));
  },[])

  // const nayoks = [{name:'Jasim',age:56},{name:'Jasim',age:56},
  // {name:'Bappa',age:56},{name:'Alam',age:56},{name:'Jasim',age:56}];
  nayoks.map(nayok => console.log(nayok));
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age} key={nk.id}></Nayok>)
      }
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
      </header>
    </div>
  );
}

function MovieCounter() {
  let [count, setCount] = useState(0);

  const handleClick = ()=> setCount(count +1 );

  return (
    <div>
      <button onClick={handleClick}>Add movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return <h4>Movies i hava acted: {props.movies}</h4>
}

function Nayok(props) {
  console.log(props);
  return (
  <div style={{border:'2px solid red',margin:'20px'}}>
    <h1>Ami Nayak-{props.name}</h1>
    <h3>I have done 5 movies in {props.age || 30} years</h3>
  </div>
  )
}

export default App;
