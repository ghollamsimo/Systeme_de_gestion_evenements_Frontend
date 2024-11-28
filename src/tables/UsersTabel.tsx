import React from "react";

export const UsersTable: React.FC = () => {
    const users = [
        { name: "John Doe", email: "john@example.com", role: "Admin", joined: "2024-01-15" },
        { name: "Jane Smith", email: "jane@example.com", role: "Client", joined: "2024-02-10" },
        { name: "Alice Johnson", email: "alice@example.com", role: "Client", joined: "2024-03-05" },
        { name: "Michael Brown", email: "michael@example.com", role: "Admin", joined: "2024-04-22" },
    ];

    return(
      <>
          <div className="bg-white p-4 rounded-lg shadow-md overflow-auto">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Users</h2>
              <table className="w-full text-left">
                  <thead>
                  <tr>
                      <th className="p-3 border-b font-medium text-gray-600">Name</th>
                      <th className="p-3 border-b font-medium text-gray-600">Email</th>
                      <th className="p-3 border-b font-medium text-gray-600">Role</th>
                      <th className="p-3 border-b font-medium text-gray-600">Joined</th>
                  </tr>
                  </thead>
                  <tbody>
                  {users.map((user, index) => (
                      <tr key={index}>
                          <td className="p-3 border-b">{user.name}</td>
                          <td className="p-3 border-b">{user.email}</td>
                          <td className="p-3 border-b">{user.role}</td>
                          <td className="p-3 border-b">{user.joined}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </>
  )
}