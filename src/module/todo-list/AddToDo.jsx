import React from 'react'
import Container from '../../components/Container'

function AddToDo({
    newTodo,
    setNewTodo,
    addTodo,
    handleKeyPress,
}) {
  return (
    <Container>
        <section className="bg-base-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
            <form className="flex flex-row gap-4">
                <input 
                    type="text" 
                    placeholder="Enter new task"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="input input-bordered w-full"
                />
                <button 
                    type="button"
                    onClick={addTodo}
                    className="btn btn-primary"
                    disabled={!newTodo.trim()}
                >
                    Add Task
                </button>
            </form>
        </section>
    </Container>
  )
}

export default AddToDo