import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Basic Hookes
let[counter,setCounter]=useState(15)

 // let counter =5
  const addValue=()=>{
   // console.log("Hello From React",counter)
   if(counter>=20){
    console.log("cannot add value more then 20");
   }else{
 counter=counter+1
   }
   setCounter(counter)
  }
  //addValue()

  const removeValue=()=>{
    if(counter <=0){
      console.log("cannto remove less then 0")
    }else{
setCounter(counter -1)
    }

  }
  return (
    <>
   <h1>Chai or React</h1>
   <h2>Counter Value : {counter}</h2>
   <button onClick={addValue} > Add Value</button>
   <br/>
   
 <button onClick={removeValue} > Remove Value</button>
   <br/>


    <p>footer: {counter}</p>
    </>
  )
}

export default App
