import React from "react";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div className="w-9/12 bg-slate-400 p-8 mx-auto rounded-md">
        {todos.map((todo) => (
            <div key={todo.id} className="flex items-center mb-2 pl-10 pr-10">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-6 w-6 rounded-md bg-white border-2 border-gray-400 hover:border-gray-900 hover:font-bold"
            />
            <p
                className={`flex-1 ${todo.completed ? "text-emerald-800":" text-cyan-800"} text-white font-bold tracking-widest text-2xl`}
            >
                {todo.text} {todo.completed ? "✅" : ""}
            </p>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white p-2 hover:bg-red-900 rounded-md hover:font-bold"
            >
                Delete
            </button>
            </div>
        ))}
        </div>
    );
}

export default TodoList;