import React from 'react'
import Container from '../../components/Container'
import { CheckCircle, CupSoda, Droplet, FilterIcon, HeartPulse, ListChecks, PersonStanding, Trash2 } from 'lucide-react'

function HealthHistory({
    setFilter,
    counts,
    filter,
    filteredEntries,
    deleteEntry,
}) {
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
            All ({counts.all})
          </button>

          {/* Calories */}
          <button
            onClick={() => setFilter("calories")}
            className={`btn btn-sm ${
              filter === "calories" ? "btn-primary btn-active" : "btn-outline"
            }`}
          >
            <HeartPulse className="h-4 w-4 mr-2" />
            Calories ({counts.calories})
          </button>

          {/* Sugar */}
          <button
            onClick={() => setFilter("sugar")}
            className={`btn btn-sm ${
              filter === "sugar" ? "btn-primary btn-active" : "btn-outline"
            }`}
          >
            <CupSoda className="h-4 w-4 mr-2" />
            Sugar ({counts.sugar})
          </button>

          {/* Water */}
            <button
                onClick={() => setFilter("water")}
                className={`btn btn-sm ${
                filter === "water" ? "btn-primary btn-active" : "btn-outline"
                }`}
            >
                <Droplet className="h-4 w-4 mr-2" />
                Water ({counts.water})
            </button>

            {/* Conditions */}
            <button
                onClick={() => setFilter("condition")}
                className={`btn btn-sm ${
                filter === "condition" ? "btn-primary btn-active" : "btn-outline"
                }`}
            >
                <PersonStanding className="h-4 w-4 mr-2" />
                Conditions ({counts.condition})
            </button>
        </div>

        <div className="w-full max-w-2xl mt-4">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-base-content/50 text-lg">
                <p>No {filter === "all" ? "Health Entries" : filter} found</p>
                <p className="text-sm mt-2">
                  Start by adding your first health entry above
                </p>
              </div>
            </div>
          ) : (
            <ul className="list-disc p-5">
              {filteredEntries.map((entry) => (
                <li
                    key={entry.id}
                    className="flex items-center justify-between bg-base-100 rounded-lg p-5 mb-3 gap-3"
                >
                    <div className='flex flex-row md:gap-4 gap-2 items-center'>
                        <div className="flex">
                            <button
                                onClick={() => deleteEntry(entry.id)}
                                className="btn btn-sm btn-circle btn-ghost hover:btn-error transition-all duration-200"
                                >
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="flex flex-col">
                            {/* Kondisional untuk tampilan */}
                            {entry.type === 'Condition' ? (
                                <span>Condition: {entry.description}</span>
                            ) : (
                            <span>
                                {entry.type}: {entry.value} {entry.unit}
                            </span>
                            )}
                            <span className="text-xs text-gray-400 mt-1">
                                {entry.type !== 'Condition' && entry.description}
                            </span>
                            <span className="flex flex-row gap-2 text-xs text-gray-400 mt-1">
                                {new Date(entry.createdAt).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
          )}
        </div>
      </section>
    </Container>
  )
}

export default HealthHistory