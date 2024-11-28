import React from "react";

export const Stats: React.FC = () => {
    const statistics = [
        { title: "Total Events", count: 245 },
        { title: "Total Users", count: 1287 },
    ];
  return(
      <>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mb-6">
              {statistics.map((stat, index) => (
                  <div
                      key={index}
                      className="bg-white w-full shadow-md rounded-lg p-4 flex items-center justify-between"
                  >
                      <h2 className="text-gray-600 font-medium">{stat.title}</h2>
                      <span className="text-2xl font-bold text-purple-600">{stat.count}</span>
                  </div>
              ))}
          </div>
      </>
  )
}