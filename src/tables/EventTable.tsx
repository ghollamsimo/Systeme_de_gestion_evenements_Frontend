import React, {useState} from "react";
import {CreateEvent} from "../components/CreateEventComponent.tsx";

export const EventTable: React.FC = () => {
    const products = [
        { name: "Gabriela Cashmere Blazer", price: "Gabriela Cashmere Blazer", products: 1113, views: 14012,  sku: "T14116" },
        { name: "Loewe blend Jacket - Blue", price: "$113.99", products: 721, views: 13212,  sku: "T14116" },
        { name: "Sandro - Jacket - Black", price: "$113.99", products: 407, views: 8201,  sku: "T14116" },
        { name: "Adidas By Stella McCartney", price: "$113.99", products: 1203, views: 1002,  sku: "T14116" },
    ];
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
                      <th className="p-3 border-b font-medium text-gray-600">Purchase Unit Price</th>
                      <th className="p-3 border-b font-medium text-gray-600">Event</th>
                      <th className="p-3 border-b font-medium text-gray-600">Views</th>
                      <th className="p-3 border-b font-medium text-gray-600">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {products.map((product, index) => (
                      <tr key={index}>
                          <td className="p-3 border-b">{product.name}</td>
                          <td className="p-3 border-b">{product.price}</td>
                          <td className="p-3 border-b">{product.products}</td>
                          <td className="p-3 border-b">{product.views}</td>
                          <td className="p-3 border-b flex space-x-2">
                              <button className="bg-purple-600 text-white px-3 py-1 rounded-lg">Edit</button>
                              <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">
                                  Delete
                              </button>
                          </td>
                      </tr>
                  ))}
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