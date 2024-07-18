

import './App.css'
import { Sform } from './components/SForm/Sform'

// interface SFormIF {

// }

function App() {

  const form=[
    {
      
      type:'text',
      label:'amir',
      placeholder:'amir',
      onChange:(e: any)=>{
        console.log({e})
      },
      error:{fn:()=>{},T:'error'}
    },
    {type:'number'}]

  return (
    <>
    <Sform {...{form}}/>
    </>
  )
}

export default App
