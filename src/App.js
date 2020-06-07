import React,{useState, useEffect} from 'react'

function App() {

  const[setup,setSetup]=useState('')
  const[joke,setJoke]=useState('')
  const[loading,setLoading]=useState(true)
  const[count,setCount]=useState(0)

    useEffect(()=>{
    fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then(res=>res.json())
    .then(result=>{
      setSetup(result.setup)
      setJoke(result.punchline)
      setLoading(false)
    })
  },[count])

  return(
    <div>
    <h1>LaughALot</h1>
    <div className="main">
    
      {loading?(<p>Loding...</p>):(
      <div>
      
        <p>{setup}</p>
        <p class="joke">{joke}</p>

        <div className="button">
        <button onClick={()=>setCount(count+1)}>Change</button>
        </div>


      </div>
        
      
    )}   
    </div>
    </div>
   );
}

export default App;
