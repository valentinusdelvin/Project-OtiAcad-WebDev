import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { useMemo } from "react";
import TodoStats from "./TodoStats";
import AddToDo from "./AddToDo";
import ToDoFilter from "./ToDoFilter";
import ToDoList from "./ToDoList";
import ClearButton from "./ClearButton";

function Todo() {
  const { todos, setTodos, addTodo, deleteTodo, toggleTodo, clearCompleted } =
    useTodos();
  const [newTodos, setNewTodos] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTodo = () => {
    if (newTodos.trim() === "") return;
    addTodo(newTodos);
    setNewTodos("");
  };
  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todos]);

  return (
    <>
      {/* Stats */}
      <TodoStats
        active={stats.active}
        completed={stats.completed}
        total={stats.total}
      />

      {/* Add Todo */}
      <AddToDo
        newTodo={newTodos}
        setNewTodo={setNewTodos}
        addTodo={handleAddTodo}
        handleKeyPress={handlePressKey}
      />

      {/* Filter */}
      <ToDoFilter stats={stats} filter={filter} setFilter={setFilter} />

      {/* Todo List */}
      <ToDoList
        filteredTodos={filteredTodos}
        filter={filter}
        todos={todos}
        stats={stats}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <ClearButton stats={stats} todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Todo;
