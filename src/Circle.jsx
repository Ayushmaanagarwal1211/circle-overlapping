import React from 'react'

export default function Circle({color,top,left}) {
  return (
    <div style={{top:`${top-50}px`,left:`${left-50}px`}} className={`h-[100px] fixed  w-[100px] bg-[${color?color:"red-600"}] bg-red-800 rounded-full`} ></div>
  )
}
