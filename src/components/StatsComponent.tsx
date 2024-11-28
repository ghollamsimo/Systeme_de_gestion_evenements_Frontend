import React from "react";

export const Stats: React.FC = ({stats}) => {
  return(
      <>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mb-6">

                  <div
                      className="bg-white w-full shadow-md rounded-lg p-4 flex items-center justify-between"
                  >
                      <h2 className="text-gray-600 font-medium">Total Events</h2>
                      <span className="text-2xl font-bold text-purple-600">{stats}</span>
                  </div>
          </div>
      </>
  )
}