'use client'
// 1. Import Area

import { useState } from "react";


//2. Define Area
// if a variable define outsite the function definations then is called global variable 
  let name = 'Anil'; // Golobal variable
  function Home() {
  // 2.1 Hooks Area
  // const [variable,setVariableFunction] = useState(initialData)  
  const [name3,setVariableFunction] = useState('Ravi')  
  let name2 = 'Rakesh'; // local variable
  // Every Function May Return Something
    // Every Function Return Some HTML i.e JSX
  return (
      <>
        <main>
          <h1>Hello {name}</h1>
          <h1>Hello {name2}</h1>
          <h1>Hello {name3}</h1>
        </main>
      </>
    )
  }
// 3. Export Area 
export default Home ;