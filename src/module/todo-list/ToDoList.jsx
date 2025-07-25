import React from "react";
import Container from "../../components/Container";
import { Calendar, Circle, CircleCheckBig, Delete, Trash2 } from "lucide-react";

function ToDoList({
  filteredTodos,
  filter,
  todos,
  stats,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <Container>
      <section>
        {filteredTodos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-base-content/50 text-lg">
              <p>No {filter === "all" ? "To Do Lists" : filter} found</p>
              <p className="text-sm mt-2">
                Start by adding your first To Do List above
              </p>
            </div>
          </div>
        ) : (
          <ul className="list-disc p-5">
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-base-100 rounded-lg p-5 mb-3 gap-3"
              >
                <div className="flex flex-row md:gap-4 gap-2 items-center">
                  <div className="flex">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`btn btn-sm ${
                        todo.completed
                          ? "btn-circle btn-ghost hover:btn-success transition-all duration-200"
                          : "btn-circle btn-ghost hover:btn-success transition-all duration-200"
                      }`}
                    >
                      {todo.completed ? <CircleCheckBig /> : <Circle />}
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={
                        todo.completed ? "line-through text-gray-500" : ""
                      }
                    >
                      {todo.text}
                    </span>
                    <span className="flex flex-row gap-2 text-xs text-gray-400 mt-1">
                      <Calendar className="h-4 w-4" />{" "}
                      {todo.createdAt.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-sm btn-circle btn-ghost hover:btn-error transition-all duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Container>
  );
}

export default ToDoList;
