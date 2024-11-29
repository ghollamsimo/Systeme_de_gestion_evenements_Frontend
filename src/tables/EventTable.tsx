import React, {useState} from "react";
import {CreateEvent} from "../components/CreateEventComponent.tsx";

export const EventTable: React.FC = ({events}) => {
    const [OpenPopup, setOpenPopup] = useState<boolean>(false)
    const toggleOpen = (): void => {
        setOpenPopup(!OpenPopup)
    }
  return(
      <>
          <div className="bg-white p-4 rounded-lg shadow-md overflow-auto mb-6">
              <div className='flex justify-between'>
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Events</h2>
                  <div onClick={toggleOpen} className='cursor-pointer bg-purple-600 rounded-lg text-white px-7 flex justify-center'>
                      <button  className=" py-1 ">Add Event</button>
                  </div>
              </div>
              <table className="w-full text-left">
              <thead>
              <tr>
                  <th className="p-3 border-b font-medium text-gray-600">Event Name</th>
                  <th className="p-3 border-b font-medium text-gray-600">Event Image</th>
                  <th className="p-3 border-b font-medium text-gray-600">Event</th>
                  <th className="p-3 border-b font-medium text-gray-600">Action</th>
              </tr>
              </thead>
                  <tbody>
                  {events && events.length > 0 ? (
                      events.map((event, index) => (
                          <tr key={index}>
                              <td className="p-3 border-b">{event.title || "N/A"}</td>
                              <td className="p-3 border-b"><img src={`http://localhost:8080/${event?.image}`} className='h-14' alt={event.title}/></td>

                              <td className="p-3 border-b">{event.description || "N/A"}</td>
                              <td className="p-3 border-b flex space-x-2">
                                  <button className="bg-purple-600 text-white px-3 py-1 rounded-lg">Edit</button>
                                  <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">Delete</button>
                                  <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">View</button>
                              </td>
                          </tr>
                      ))
                  ) : (
                      <tr>
                      <td colSpan={5} className="text-center p-3">No events available</td>
                      </tr>
                  )}
                  </tbody>
              </table>
          </div>
          {OpenPopup && (
              <>
                <CreateEvent setIsOpen={setOpenPopup}/>
              </>
          )}
      </>
  )
}