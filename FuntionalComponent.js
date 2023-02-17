import React, { useState } from 'react'

function FuntionalComponent(props) {
    const {name, skills} = props
    const [getName,setName] = useState(name)
    const [getSkills,setSkills] = useState(skills)
    
    const buttonClick = () => {
        setName('Hari')
        setSkills('Python')
    }
  return (<>
    <div>Hello {getName}. I know {getSkills}.</div>
    <button onClick={buttonClick}>Click</button>
    </>
  )
}

export default FuntionalComponent