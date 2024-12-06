import { useState } from "react";
import axios from "axios";

export default function AddPlayer() {
    const [formData, setFormData] = useState({
        name: "",
        points: "",
        assists: "",
        rebounds: "",
        three_pt: "",
        two_pt: "",
        team: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/players", formData);
            setSuccessMessage("Player created successfully!");
            setFormData({
                name: "",
                points: "",
                assists: "",
                rebounds: "",
                three_pt: "",
                two_pt: "",
                team: "",
            });
            setErrors({});
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: "Something went wrong!" });
            }
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-semibold mb-6 text-[#FF2D20]">
                Add New Player
            </h1>
            {successMessage && (
                <div className="text-green-600 mb-4 p-4 bg-green-100 border border-green-300 rounded-md">
                    {successMessage}
                </div>
            )}
            {errors.general && (
                <div className="text-red-600 mb-4 p-4 bg-red-100 border border-red-300 rounded-md">
                    {errors.general}
                </div>
            )}
            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
            >
                {Object.entries({
                    name: "Name",
                    points: "Points",
                    assists: "Assists",
                    rebounds: "Rebounds",
                    three_pt: "3-Point Shots",
                    two_pt: "2-Point Shots",
                    team: "Team",
                }).map(([key, label]) => (
                    <div key={key}>
                        <label
                            htmlFor={key}
                            className="block text-sm font-medium text-gray-700"
                        >
                            {label}
                        </label>
                        <input
                            type={
                                key === "team"
                                    ? "text"
                                    : key === "name"
                                    ? "text"
                                    : "number"
                            }
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FF2D20] sm:text-sm"
                        />

                        {errors[key] && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors[key][0]}
                            </div>
                        )}
                    </div>
                ))}
                <button
                    type="submit"
                    className="inline-block rounded-md px-4 py-2 bg-[#FF2D20] text-white transition hover:bg-[#FF2D20]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2D20]"
                >
                    Add Player
                </button>
            </form>
        </div>
    );
}
