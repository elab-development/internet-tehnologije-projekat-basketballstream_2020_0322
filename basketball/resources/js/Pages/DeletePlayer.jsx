import { useState } from "react";
import { Head } from "@inertiajs/react";

export default function DeletePlayer() {
    const [playerId, setPlayerId] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await fetch(`api/players/${playerId}/delete`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setPlayerId(""); // Clear input field
            } else {
                setError(data.message || "An error occurred.");
            }
        } catch (error) {
            setError("An error occurred.");
        }
    };

    return (
        <>
            <Head title="Delete Player" />
            <div className="bg-gradient-to-b from-blue-900 via-gray-900 to-black text-gray-200 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Delete Player
                    </h2>
                    <form onSubmit={handleDelete}>
                        <div className="mb-4">
                            <label
                                htmlFor="playerId"
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Player ID
                            </label>
                            <input
                                type="text"
                                id="playerId"
                                value={playerId}
                                onChange={(e) => setPlayerId(e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-700 rounded-md text-gray-900 bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Enter Player ID"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                        >
                            Delete Player
                        </button>
                    </form>
                    {message && (
                        <div className="mt-4 text-green-500">{message}</div>
                    )}
                    {error && <div className="mt-4 text-red-500">{error}</div>}
                </div>
            </div>
        </>
    );
}
