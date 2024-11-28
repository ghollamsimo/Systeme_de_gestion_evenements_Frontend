import React from "react";

export const NavbarDashboard: React.FC = () => {
  return(
      <>
          <header className="bg-white border-b p-4 flex justify-between items-center">
              <h1 className="text-lg font-bold text-gray-800">Evento</h1>
              <div className="flex items-center space-x-4">
                  <input
                      type="text"
                      placeholder="Search..."
                      className="border rounded border-gray-100 -lg px-4 py-2 text-sm focus:outline-none"
                  />
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                      K
                  </div>
              </div>
          </header>

      </>
  )
}