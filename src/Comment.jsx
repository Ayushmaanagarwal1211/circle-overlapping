import React from 'react'

export default function Comment({comment,handleChange}) {
  return (
    <div className='ml-8'>
        {
            comment.map(data=><div onClick={()=>handleChange(data)}><h1>{data.message}</h1>
            {
                <Comment comment={data.replies}/>
            }    
            </div>)
        }
        
    </div>
  )
}
