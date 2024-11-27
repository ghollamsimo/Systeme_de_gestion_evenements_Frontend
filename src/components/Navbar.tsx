import React from "react";

export const Navbar: React.FC = () => {
    const toggleLogout = () => {
        localStorage.removeItem('token')
    }
  return(
      <>
          <header className='w-screen'>
              <nav className='flex border-gray-200 rounded-2xl border p-4 justify-between m-3'>
                  <div className='font-semibold'>
                      <h1>Evento</h1>
                  </div>

                  <div className='cursor-pointer' onClick={toggleLogout}>
                      <h1>Logout</h1>
                  </div>
              </nav>
          </header>
      </>
  )
}