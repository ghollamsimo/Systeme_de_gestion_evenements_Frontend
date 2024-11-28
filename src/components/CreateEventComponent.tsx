import React, { useState } from "react";

interface CreateEventProps {
    setIsOpen: (isOpen: boolean) => void;
}

export const CreateEvent: React.FC<CreateEventProps> = ({ setIsOpen }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [participants, setParticipants] = useState<string[]>([]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleParticipantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setParticipants(selectedOptions);
    };

    const handleSubmit = () => {
        console.log({ title, description, image, participants });
        setIsOpen(false);
    };

    return (
        <>
            <div className="fixed inset-0 z-50">
                <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>

                <div className="min-h-screen px-4 text-center flex items-center justify-center">
                    <div className="inline-block py-8 h-screen w-full max-w-4xl opacity-100 scale-100">
                        <div className="inline-flex flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white shadow-xl h-fit">
                            <div className="text-black relative flex-shrink-0 px-6 py-4 border-b border-gray-200 text-center">
                                <h3 className="text-lg leading-6">Create Event</h3>
                                <span className="absolute left-3 top-3">
                  <button
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5"
                    >
                      <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
                            </div>

                            <div className="p-6">
                                {/* Form */}
                                <form className="space-y-4">
                                    {/* Title Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Event Title</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>

                                    {/* Description Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea
                                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                            rows={4}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>

                                    {/* Image Upload */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Event Image</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                                            onChange={handleImageUpload}
                                        />
                                    </div>

                                    {/* Participants Multi-Select */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Participants</label>
                                        <select
                                            multiple
                                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                            onChange={handleParticipantChange}
                                        >
                                            <option value="John Doe">John Doe</option>
                                            <option value="Jane Smith">Jane Smith</option>
                                            <option value="Alice Johnson">Alice Johnson</option>
                                            <option value="Michael Brown">Michael Brown</option>
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                                        >
                                            Create Event
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
