import React, {Suspense, useEffect, useState } from 'react'
import Suggestion, { updatePromise } from './Suggestion';
import Circle from './Circle';
// import Component from './Component';
const Component = React.lazy(()=>import("./Component"))

// updatePromise("sdsdsdsds")
function delay(time) {
  return new Promise((res) => setTimeout(() => res("Done"), time));
}
let promise = null

function App() {
const [arr,setArr] = useState([])

  function checkIntersection(x,y){
    let isIntersection = false
    arr.map(data=>{
      const height = Math.max(x,data[0]) - Math.min(x,data[0])
      const width = Math.max(y,data[1]) - Math.min(y,data[1])
      const distance = Math.sqrt(height**2 + width**2)
      if(distance <= 100){
        isIntersection = true
      }
    })
    return isIntersection
 }

 useEffect(()=>{

  document.addEventListener("click",handleAddCircle)
  return ()=>{
    document.removeEventListener("click",handleAddCircle)
  }
 })
  function handleAddCircle(e){
    
    const left = e.clientX
    const top = e.clientY
    if(checkIntersection(left,top)){
      return 
    }
    setArr(prev=>[...prev, [left,top]])
  }
  return (    
  <>  
  {
    arr.map(([left,top])=>
      <Circle left={left} top={top}/>

    )
  }










  
  {/* <div className='h-[1000px] w-[1000px] ' onClick={handleAddCircle}></div> */}
    {/* <Suspense fallback={<h1>...Loading</h1>}>
    <Suggestion value={input}/>
    </Suspense> */}
    {/* {
      // arr.map(([left,top]) => <Circle top={top} left={left} />)
      arr.map((data,index)=>{
        let promise = fetchData(index)
        return <Suspense fallback={<h1>{index}</h1>}><Component promise={promise}/></Suspense>
      })
    } */}
    {/* <OtpComponent/> */}
    {/* <Suspense fallback={<h1>..sdfffffffffffffffffffffffffffff.Loading</h1>}>

    <Component/>
    </Suspense> */}
  </>
  )
}

export default App
