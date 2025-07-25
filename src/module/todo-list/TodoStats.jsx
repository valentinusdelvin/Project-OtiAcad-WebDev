import React from "react";
import Container from "../../components/Container";

function TodoStats({ active, completed, total }) {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border border-neutral/30 shadow-lg">
          <div className="card-body p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base-content/70 font-medium">
                Total Tasks
              </span>
            </div>
            <div className="text-3xl font-bold text-primary">{total}</div>
          </div>
        </div>

        {/* Active card */}
        <div className="card bg-gradient-to-br from-/10 to-warning/5 border border-warning/20 shadow-lg">
          <div className="card-body p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base-content/70 font-medium">
                Active Tasks
              </span>
            </div>
            <div className="text-3xl font-bold text-warning">{active}</div>
          </div>
        </div>

        {/* Completed card */}
        <div className="card bg-gradient-to-br from-success/10 to-success/5 border border-success/20 shadow-lg">
          <div className="card-body p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base-content/70 font-medium">
                Completed Tasks
              </span>
            </div>
            <div className="text-3xl font-bold text-success">{completed}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TodoStats;
