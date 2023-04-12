import TodoItem from "./TodoItem";
import React, { useState } from 'react';

function TodoList() {

    const [todoList, setTodoList] = useState([]);
    const [newTodoInput, setNewTodoInput] = useState("");

    const handleAddTodo = event => {
        event.preventDefault();
        const newTodo = {
            id: Date.now(),
            text: newTodoInput,
            completed: false,
        };
        setTodoList([...todoList, newTodo])
        setNewTodoInput("");
    }

    const handleTodoToggle = (todoId) => {
        const updatedTodoList = todoList.map((todo) => {
            if (todo.id === todoId) {
                return {...todo, completed: !todo.completed}
            } else {
                return todo;
            }
        });
        setTodoList(updatedTodoList)
    }


    return(
        <div>
            <h2>Todo List</h2>

            <form onSubmit={handleAddTodo}>
                <p>add new todo</p>
                <input 
                    type="text"
                    placeholder="add new todo"
                    value={newTodoInput}
                    onChange={event => setNewTodoInput(event.target.value)}
                />
                <button>Add</button>
            </form>

            {todoList.map(todo => (
                <TodoItem todo={todo} key={todo.id} onTodoToggle={handleTodoToggle} />
            ))}

        </div>
    )
}

export default TodoList;