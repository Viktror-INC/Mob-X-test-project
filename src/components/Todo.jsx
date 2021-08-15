import React from 'react';
import {observer} from "mobx-react-lite";
import todoClass from "../store/todo";


const Todo = observer(() => {
    console.log('rendered')
    return (
        <ul className="todos">
            <button onClick={() => todoClass.fetchTodos()}>took Json</button>
            {todoClass.todos.map((item, index) =>{
                return (
                        <li key={item.id}>
                            <input type="checkbox" checked={item.completed} onChange={() => todoClass.completeTodo(item.id)}/>
                            {item.name}
                            <button onClick={() => todoClass.removeTodo(item.id)}>X</button>
                        </li>
                )
            })}
        </ul>
    );
})

export default Todo;