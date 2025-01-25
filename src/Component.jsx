import React, { useMemo, use } from 'react';



export default function Component({ promise }) {
  // console.log(promise)

  // const dataPromise = use(promise) // Fetches only if URL changes

  // console.log(dataPromise, "this");

  // return <div>{dataPromise}+sddddddddddddddddddd</div>;
  const val = (function (){for(let i=0;i<100000000;i++){}})();
  return (
    <h1>sdsd</h1>
  )
}
