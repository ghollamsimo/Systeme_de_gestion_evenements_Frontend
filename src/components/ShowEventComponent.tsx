import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store.ts";
import { show } from "../redux/slices/EventSlice.ts";

export const ShowEvent: React.FC = ({ setOpenModal, eventId }) => {
    const dispatch = useDispatch();
    const event = useSelector((state: RootState) => state.event.dataObj);

    useEffect(() => {
        if (eventId) {
            dispatch(show(eventId));
        }
    }, [dispatch, eventId]);

    const { title, image, description, participants } = event || {};

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>
            <div className="min-h-screen px-4 text-center flex items-center justify-center">
                <div className="inline-block py-8 h-screen w-full max-w-4xl opacity-100 scale-100">
                    <div className="inline-flex flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white shadow-xl h-fit">

                        <div className="text-black relative flex-shrink-0 px-6 py-4 border-b border-gray-200 text-center">
                            <h3 className="text-lg leading-6 font-semibold">{title}</h3>
                            <span className="absolute left-3 top-3">
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </span>
                        </div>

                        <div className="flex justify-between p-6">
                            <div className="w-3/5">
                                <div>
                                    <h4 className="text-lg font-semibold">Description</h4>
                                    <p className="text-gray-700">{description}</p>
                                </div>

                                {participants && participants.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="text-lg font-semibold">Participants</h4>
                                        <ul className="space-y-4">
                                            {participants.map((participant) => (
                                                <li key={participant._id} className="flex items-center space-x-4">
                                                    <span className="font-semibold">{participant.name}</span>
                                                    <span className="text-sm text-gray-600">{participant.email}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {image && (
                                <div className="w-2/5 flex justify-center">
                                    <img src={`http://localhost:8080/${image}`} alt={title} className="rounded-lg shadow-lg h-28 object-cover"/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
