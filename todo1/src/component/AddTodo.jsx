import React from "react";

const AddTodo = ({ addTodo }) => { 
    const [todo, setTodo] = React.useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo(todo);
        setTodo("");
    };
    
    return (
        <form onSubmit={handleSubmit} className="mb-4">
        <input
            type="text"
            className="border-2 py-2 px-8 bg-orange-300 border-red-400 text-white font-bold rounded-md w-8/12 tracking-widest "
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 ml-2 hover:bg-blue-900 rounded-md hover:font-bold">
            Add Todo
        </button>
        </form>
    );
}

export default AddTodo;