import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { store } from "../redux/slices/ParticipantSlice.ts";
import { indexUsers } from '../redux/slices/AuthSlice.ts';

export const CreateUser: React.FC<{ setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsOpen }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role] = useState<string>("participant");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!name || !email || !password || !role) {
            setError("All fields are required.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);

        setLoading(true);
        dispatch(store(formData));
        await dispatch(indexUsers())
        setIsOpen(false);
    };


    return (
        <div className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>
            <div className="min-h-screen px-4 text-center flex items-center justify-center">
                <div className="inline-block py-8 h-screen w-full max-w-4xl opacity-100 scale-100">
                    <div className="inline-flex flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white shadow-xl h-fit">
                        <div className="text-black relative flex-shrink-0 px-6 py-4 border-b border-gray-200 text-center">
                            <h3 className="text-lg leading-6">Create User</h3>
                            <span className="absolute left-3 top-3">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </span>
                        </div>

                        <div className="p-6">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm">
                                        {error}
                                    </div>
                                )}

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                                        disabled={loading}
                                    >
                                        {loading ? "Creating..." : "Create User"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
