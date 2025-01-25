import React, { use } from 'react'
function delay(time) {
    return new Promise((res) => setTimeout(() => res("Done"), time));
  }
  async function fetchData(){
    console.log('sdsd')
    await delay(2000)
    return ['apply',
      'apple',
      'applt'
  ]
  }
  let promise = null
  export const updatePromise = function (url){promise = fetchData(url)}
export default function Suggestion({value}) {
    const arr = use(promise)
    const filtered_data =value.length>0 ?  arr.filter(data => data.includes(value.toLowerCase())) : []
  return (
        filtered_data?.map(data => <h1>{data}</h1>)
    
  )
}
