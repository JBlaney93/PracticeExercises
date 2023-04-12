function TodoItem({ todo, onTodoToggle }) {

    const handleToggle = () => {
        onTodoToggle(todo.id)
    }

    const todoStyle = {
        textDecoration: todo.completed ? "line-through" : "none",
      };
    
    return(
        <div>
            <p style={todoStyle}>{todo.text}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            </p>
        </div>
    )
}

export default TodoItem;