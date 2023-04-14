import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

const Home = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const todolist = useSelector((state) => state.todolist);
 

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && trimmedText) {
      // Dispatch the "todo added" action with this text
      dispatch({ type: 'todos/todoAdded', data: trimmedText })
      // And clear out the text input
      setText('')
    }
  }

  return (
    <>
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
<div>
    {todolist.map((todoitem) => (
       
                <li className="list-group-item">{todoitem}</li>
))}
  </div>

  </>
  )
}


export default Home