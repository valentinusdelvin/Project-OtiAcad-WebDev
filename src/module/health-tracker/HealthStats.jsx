import React from "react";
import Container from "../../components/Container";

function HealthStats({ todayStats }) {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="bg-slate-700/40 p-6 w-1/3 rounded-lg">
          <h2 className="text-indigo-500 font-bold">Today</h2>

          <div className="text-white mt-2">
            <div className="flex justify-between mb-2">
              <span className="text-sm">Body Conditions</span>
              <span className="text-sm font-bold">{todayStats.conditions}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Glucose Level</span>
              <span className="text-sm font-bold">{todayStats.sugar} mg</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Water Intake</span>
              <span className="text-sm font-bold">{todayStats.water} ml</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Calories Consumed</span>
              <span className="text-sm font-bold">
                {todayStats.calories} kcal
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HealthStats;
