import React from 'react'
import'./Person.css'

const person = (props) =>{
        return (
        <div className="Person">
          <p> I am {props.name},I am {Math.floor(Math.random()* 100) }years old {props.children} </p>
          <button onClick={props.click}>Click</button>
          <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default person;