import React from "react";
import Container from "../../components/Container";

function ClearButton({ stats, todos, setTodos }) {
  if (stats.completed === 0) return null;

  const handleClearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  };

  return (
    <Container>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleClearCompleted}
          className="btn btn-sm btn-outline btn-error"
        >
          Clear Completed Tasks ({stats.completed})
        </button>
      </div>
    </Container>
  );
}

export default ClearButton;
