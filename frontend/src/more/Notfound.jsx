import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      <div
       style={{
        width:"100%",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
      }}
      >
      <h1>404 Not Found anything in this url</h1>
      <Link to="/"
      style={{
        color:"#3BB77E",
        fontSize:"1.5vmax",
        fontFamily:"sans-serif",
        padding:"1vmax 0"
      }}
      >Go Back to Home</Link>
      </div>
    </div>
  )
}

export default Notfound