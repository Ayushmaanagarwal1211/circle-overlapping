import React, { useEffect, useRef, useState } from 'react'

export default function OtpComponent() {
    const [arr,setArr] = useState(new Array(5).fill(''))
    // const [focusedIndex]
    const ref = useRef([])
    useEffect(()=>{
       async  function handlePaste(){
            let currFocusedInput = document.activeElement.id
            if(currFocusedInput == ""){
                return 
            }
            const clipboard =await  navigator.clipboard.readText()
            for(let i=+currFocusedInput,index=0;i<ref.current.length && index<clipboard.length;i++,index++){
                console.log(i)
                ref.current[i].value = clipboard[index]
                handleFocus(ref.current[i])
            }
        }
        window.document.addEventListener("paste",handlePaste)
        return ()=>{
            window.document.removeEventListener("paste",handlePaste)
        }
    },[])
    function handleInput(e,index){
        const key = e.key
        if(key == "Tab"){
            return
        }
        if(key == "Backspace"){
            ref.current[index-1].value = ""
            index>0 && ref.current[index-1].focus()
        }else if(/[a-zA-Z]/.test(key)){return}else{
            e.target.value = key
            index<4 && ref.current[index+1].focus()
        }
        
    }
    function handleFocus(e){
        console.log(e)
        const temp = e.value
        e.value = ""
        e.value = temp
        e.focus()
    }
    function handleClick(e){
        const temp = e.target.value
        e.target.value = ""
        e.target.value = temp
    }
    return (
    <>
    <div className='flex gap-2 p-6'>
        {
            arr.map((data,index)=><input onInput={(event) => {
                event.target.value = event.target.value.replace(/[^0-9]/g, '');
            }} onClick={handleClick} type='password'  ref={(iRef)=>{ref.current.push(iRef);return ()=>{
                ref.current = []
            }}} onKeyUp={(e)=>handleInput(e,index)} id={index}  className={`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 border-black border-[1px] rounded-lg text-center w-[40px] h-[40px]`}></input>)
        }

    </div>
    </>
  )
}
