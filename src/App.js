import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [nayoks, setNayoks ]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setNayoks(data))
  },[]
  )
 // const nayoks=[{name:'Jasim',age:56},{name:'BappaRaz',age:56},{name:'DeepJol',age:56}]
  return (
    <div className="App">
      <header className="App-header">
       <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
    
      
      </header>
    </div>
  );
}
function MovieDisplay(props) {

  return <h4>Movies I have acted:{props.movies}</h4>
}
function MovieCounter(){
 const [count,setCount]=useState(0);
 //console.log(count,setCount)
const handleClick = () =>setCount(count+1);
  return(
    <div>

      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies:{count}</h3>
      <MovieCounter movies={count}></MovieCounter>
    </div>
  )
}

function Nayok(props) {
  //console.log(props.name)
  const nayokStyle={
    border: '1px solid red',
    margin:'20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayak-{props.name}</h1>
      <h3>I have done 5 movies in {props.age} years</h3>
    </div>
  )
}

export default App;
