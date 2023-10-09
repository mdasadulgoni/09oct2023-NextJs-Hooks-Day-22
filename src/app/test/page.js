'use client'
import { Button } from '@mui/material';
//1. import Area 
import React, { useEffect, useState } from 'react'

//2. Define Area
function page() {
// 2.1 Hooks Area
let [name4,setName4] = useState('Bro Change the Value')
useEffect(()=>{
    console.log(`Helo ${name4} Page Successfully Loaded and do anything`);
},[])
//2.2 Function Defination Area
const anil = ()=>{
    console.log('How r u');
    let x = prompt('Please Inter Your Name')
    console.log(x);
    setName4(x)
}
// Functions Returning JSX
return (
    <>
    <h1>Hello {name4}</h1>
    <h1>This Is a Test Page</h1>
    <Button variant="contained" onClick={()=>{anil()}}>Inter Your Name</Button>
    </>
)
}
//3. Export Area
export default page;
