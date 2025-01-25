import React from 'react'

export default function Theme({theme,toggleTheme}) {
    
  return (
    <div onClick={toggleTheme} className={`${theme?"":"text-white"} fixed right-3 top-2`}>{theme ? "Dark Mode":"Light Mode"}</div>
  )
}
