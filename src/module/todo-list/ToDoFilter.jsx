import React from 'react'
import Container from '../../components/Container'
import { Filter as FilterIcon, CheckCircle, ListChecks } from "lucide-react";

function ToDoFilter({ stats, filter, setFilter }) {
  return (
    <Container>
      <section className='flex flex-col items-center justify-between gap-4 p-4'>
        <div className="btn-group flex items-center gap-2">

          {/* All */}
          <button
            onClick={() => setFilter("all")}
            className={`btn btn-sm ${
              filter === "all" ? "btn-primary btn-active" : "btn-outline"
            }`}
          >
            <FilterIcon className="h-4 w-4 mr-2" />
            All ({stats.total})
          </button>

          {/* Active */}
          <button
            onClick={() => setFilter("active")}
            className={`btn btn-sm ${
              filter === "active" ? "btn-warning btn-active" : "btn-outline"
            }`}
          >
            <ListChecks className="h-4 w-4 mr-2" />
            Active ({stats.active})
          </button>

          {/* Completed */}
          <button
            onClick={() => setFilter("completed")}
            className={`btn btn-sm ${
              filter === "completed" ? "btn-success btn-active" : "btn-outline"
            }`}
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Completed ({stats.completed})
          </button>

        </div>
      </section>
    </Container>
  )
}

export default ToDoFilter
