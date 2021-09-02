import React, {useEffect, useState} from 'react'

const TodoApp = ({todos, addTodo, fetchTodo}) =>{
    const [text, setText] = useState("");
    useEffect(() => {
        fetchTodo();
    }, [fetchTodo])
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
                <li key={todo.id}>{todo.title}</li>
            ))}
            </ul>
        </div>
    )
} 
export default TodoApp;