import React , {useState, useEffect} from 'react'
import axios from 'axios';
import ClassCount from './component/ClassComponent'
import HookCounter2 from './component/HookCounter2'
import HookCounter from './component/HookCounter'
import HookExample from './component/HookCounter3'
import Data from './component/Data'

const App = () => {
  const [people, setPeople] = useState()
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res.data)
      setPeople(res.data)
    })
  },[])
  return (
    <div>
      <h1> Button Made using Class Componet</h1>
      <ClassCount />
      <br />
      <h1> Button Made using Funtional  Componet</h1>
      <HookCounter />
      <br/>
      <HookCounter2 />
      <br />
      <HookExample />
      <br />
      <Data data={people} />  
    </div>
  )
}

export default App
