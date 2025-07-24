import React from 'react'
import Container from '../../components/Container'
import { ChevronDown } from 'lucide-react'

function HealthForm({
  inputType,
  setInputType,
  inputValue,
  setInputValue,
  description,
  setDescription,
  handleSubmit,
  isFormValid,
  getDescriptionPlaceholder,

}) {
  return (
    <Container>
      <div className='flex flex-row justify-between items-center mt-6 border border-slate-700/40 p-6 rounded-2xl'>
        <p>Input Track</p>

        <div className='dropdown dropdown-bottom dropdown-center ml-4 w-1/6 relative'>
          <button
            tabIndex={0}
            className="btn btn-ghost btn-lg rounded-btn w-full bg-white text-black flex justify-between items-center px-4 pb-2 pt-2"
          >
            <span>{inputType || 'Select Type'}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <ul
            tabIndex={0}
            className="dropdown-content absolute left-1/2 -translate-x-1/2 mt-2 menu bg-white text-black rounded-box w-48 p-2 shadow z-10"
          >
            <li><a onClick={() => setInputType('Calories')}>Calories</a></li>
            <li><a onClick={() => setInputType('Sugar')}>Sugar</a></li>
            <li><a onClick={() => setInputType('Water')}>Water</a></li>
            <li><a onClick={() => setInputType('Condition')}>Condition</a></li>
          </ul>
        </div>

        <div className="ml-4 w-1/6">
            <fieldset className="relative border border-base-800 rounded-lg px-4 pt-2 py-3 mb-1.5">
                <legend className="px-1 text-sm text-base-800 mb-0">Input</legend>
                <input
                    type="text"
                    placeholder="0"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && isFormValid()) {
                        handleSubmit(e);
                      }
                    }}
                    className="w-full bg-transparent border-none focus:outline-none text-base mb-1.5"
                />
            </fieldset>
        </div>

        <div className="ml-4 w-1/3">
            <fieldset className="relative border border-base-800 rounded-lg px-4 pt-2 py-3 mb-1.5">
                <legend className="px-1 text-sm text-base-800 mb-0">Description</legend>
                <input
                    type="text"
                    placeholder={getDescriptionPlaceholder()}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && isFormValid()) {
                        handleSubmit(e);
                      }
                    }}
                    className="w-full bg-transparent border-none focus:outline-none text-base mb-1.5"
                />
            </fieldset>
        </div>

        <button
          className="btn btn-primary ml-4"
            onClick={handleSubmit}
            disabled={!isFormValid()}
        >
            Submit
        </button>

      </div>
    </Container>
  )
}

export default HealthForm