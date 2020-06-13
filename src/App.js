import React, {useState} from 'react';
import axios from 'axios'; 

import Credentials from './Component/Credentials.js';
import './App.css';
import Search from './Component/Search';
import Results from './Component/Results'






function App() {

   const [state, setState] = useState({
     s:'',
     results:[],
     current:{}
   });
  const apiurl = "http://www.omdbapi.com/?apikey="+ Credentials.apikey;

  
  const handleinput = (event)=>{
    let s = event.target.value;
     setState(previous =>{
      return { ...previous, s:s}
    });
    //console.log(state.s);
  }

  const searchinput = (event)=>{  
    if(event.key ==="Enter"){
      console.log("search "+ state.s);
      axios(apiurl+"&s=" + state.s).then(({data})=>{
        let result = data.Search;
        //console.log(result)
        console.log(Credentials.apikey);
        setState(previous =>{
          return {...previous, results:result }
        })
      });
    }
  }

  // const test= ()=>{
   
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React sample app for movie search</h1>
      </header>
      <main>
        <Search handleinput={handleinput} searchinput={searchinput}/>
        <Results results={state.results} />
      </main>
    </div>
  );
}




export default App;
