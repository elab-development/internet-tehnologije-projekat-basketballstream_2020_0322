import React, { useState } from "react";
import axios from "axios";
import { Head } from "@inertiajs/react"; // Uvezite Head komponentu

export default function Striming() {
    const [playerName, setPlayerName] = useState("");
    const [playerData, setPlayerData] = useState(null);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    const fetchPlayerData = async () => {
        try {
            const formattedName = playerName.replace(/\s+/g, "_");
            const response = await axios.get(
                `http://localhost:8000/api/players/${formattedName}`
            );
            if (response.data.status === 200) {
                setPlayerData(response.data.player);
                setError("");
            } else {
                setError("Player not found");
                setPlayerData(null);
            }
        } catch (err) {
            setError(
                "An error occurred while fetching player data, invalid player name"
            );
            setPlayerData(null);
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center text-gray-200"
            style={{
                backgroundImage:
                    "url('https://wallpapercave.com/wp/wp2825243.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Head title="Statistika" />{" "}
            {/* Dodajte Head komponentu sa custom naslovom */}
            <h1 className="text-4xl font-extrabold mb-8 text-center">
                NBA Player Stats
            </h1>
            <div className="mb-6 w-full max-w-md">
                <input
                    type="text"
                    value={playerName}
                    onChange={handleInputChange}
                    placeholder="Enter player name"
                    className="w-full rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#FF2D20]"
                />
                <button
                    onClick={fetchPlayerData}
                    className="mt-4 w-full rounded-md px-4 py-2 bg-[#FF2D20] text-white font-bold text-lg transition hover:bg-[#FF2D20]/80 focus:outline-none focus:ring-2 focus:ring-[#FF2D20] focus:ring-opacity-50"
                >
                    Show Stats
                </button>
            </div>
            {error && (
                <p className="text-red-500 font-semibold text-center">
                    {error}
                </p>
            )}
            {playerData && (
                <div className="bg-[#1a202c] border-2 border-[#FF2D20] p-8 rounded-lg shadow-2xl text-center max-w-lg w-full">
                    <h2 className="text-3xl font-bold mb-6 text-[#FF2D20]">
                        {playerData.name}
                    </h2>
                    <div className="flex flex-wrap justify-around text-lg space-y-4 sm:space-y-0">
                        <div className="w-full sm:w-1/2">
                            <p className="font-semibold text-gray-300">Team:</p>
                            <p className="text-gray-200">{playerData.team}</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <p className="font-semibold text-gray-300">
                                Average points:
                            </p>
                            <p className="text-gray-200">{playerData.points}</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <p className="font-semibold text-gray-300">
                                Assists:
                            </p>
                            <p className="text-gray-200">{playerData.asists}</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <p className="font-semibold text-gray-300">
                                Rebounds:
                            </p>
                            <p className="text-gray-200">
                                {playerData.rebounds}
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <p className="font-semibold text-gray-300">
                                3-pt Shots:
                            </p>
                            <p className="text-gray-200">
                                {playerData.three_pt}
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <p className="font-semibold text-gray-300">
                                2-pt Shots:
                            </p>
                            <p className="text-gray-200">{playerData.two_pt}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
