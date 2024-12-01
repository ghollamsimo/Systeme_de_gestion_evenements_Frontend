import React, {useState} from "react";
import {CreateUser} from "../components/CreateUserComponent.tsx";
import {UpdateUser} from "../components/UpdateUserComponent.tsx";
import {DeleteUser} from "../components/DeleteUserComponent.tsx";
export const UsersTable: React.FC = ({ users }) => {
    const [OpenPopup, setOpenPopup] = useState<boolean>(false);
    const [UpdatePopup, setUpdatePopup] = useState<boolean>(false);
    const [DeletePopup, setDeletePopup] = useState<boolean>(false);
    const [UserId, setUserId] = useState<boolean>(false);
    const toggleDelete = (userId: string): void => {
        setDeletePopup(!DeletePopup);
        setUserId(userId);
    };
    const toggleOpen = (): void => {
        setOpenPopup(!OpenPopup);
    };
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-CA");
    };

    const toggleUpdate = (userId: string): void => {
        setUpdatePopup(!UpdatePopup);
        setUserId(userId);
    };


    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md overflow-auto">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Users</h2>
                    <div
                        className="cursor-pointer bg-purple-600 rounded-lg text-white px-7 flex justify-center"
                    >
                        <button onClick={toggleOpen} className="py-1">Add User</button>
                    </div>
                </div>
                <table className="w-full text-left">
                    <thead>
                    <tr>
                        <th className="p-3 border-b font-medium text-gray-600">Name</th>
                        <th className="p-3 border-b font-medium text-gray-600">Email</th>
                        <th className="p-3 border-b font-medium text-gray-600">Role</th>
                        <th className="p-3 border-b font-medium text-gray-600">Created At</th>
                        <th className="p-3 border-b font-medium text-gray-600">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="p-3 border-b">{user.name}</td>
                            <td className="p-3 border-b">{user.email}</td>
                            <td className="p-3 border-b">{user.role}</td>
                            <td className="p-3 border-b">{formatDate(user.created_at)}</td>
                            <td className="p-3 border-b">
                                <div className="flex gap-7 items-center">
                                    <button
                                        onClick={() => toggleUpdate(user._id)}
                                            className="bg-purple-600 text-white px-2 py-1 rounded-lg">
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => toggleDelete(user._id)}
                                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg"
                                    >
                                        Delete
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {OpenPopup && <CreateUser setIsOpen={setOpenPopup}/>}
            {UpdatePopup && <UpdateUser setIsOpen={setUpdatePopup} userId={UserId}/>}
            {DeletePopup && <DeleteUser setIsOpen={setDeletePopup} userId={UserId}/>}
        </>
    );
};
