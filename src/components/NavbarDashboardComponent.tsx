import React from "react";
import {useNavigate} from "react-router-dom";

export const NavbarDashboard: React.FC = () => {
    const navigate = useNavigate()
    const toggleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
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
                  <div onClick={toggleLogout} className="w-8 h-8 cursor-pointer flex items-center justify-center text-gray-500">
                      logout
                  </div>
              </div>
          </header>

      </>
  )
}