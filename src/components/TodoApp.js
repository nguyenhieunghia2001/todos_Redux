import React, {useState} from 'react'

const TodoApp = ({todos, addTodo}) =>{
    const [text, setText] = useState("");
    return (
        <div>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => addTodo(text)}>Add</button>
            <ul>
            {todos.map(todo => (
                <li>{todo}</li>
            ))}
            </ul>
        </div>
    )
} 
export default TodoApp;