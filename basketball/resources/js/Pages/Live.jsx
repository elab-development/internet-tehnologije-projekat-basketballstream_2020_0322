import React, { useState } from "react";
import axios from "axios";
import { Head } from "@inertiajs/react"; // Import Head component

export default function Live() {
    const [searchTerm, setSearchTerm] = useState("");
    const [articles, setArticles] = useState([]);
    const [allArticles, setAllArticles] = useState([]);
    const [error, setError] = useState("");
    const [showAll, setShowAll] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const fetchNewsData = async () => {
        try {
            const response = await axios.get("/api/espn/news");
            const fetchedArticles = response.data.articles;
            setAllArticles(fetchedArticles);
            setArticles(fetchedArticles);
            setShowAll(true);
            setError("");
        } catch (err) {
            setError("An error occurred while fetching the news");
        }
    };

    const searchNewsData = () => {
        if (allArticles.length === 0) return;

        const filteredArticles = allArticles.filter((article) =>
            article.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredArticles.length > 0) {
            setArticles(filteredArticles);
            setError("");
        } else {
            setError("No articles found");
            setArticles([]);
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center p-8"
            style={{
                backgroundImage:
                    "url('https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/025fd2c4-e5f4-40c0-a328-c717b66cf632/NBA+Wallpaper')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Head title="Vesti" /> {/* Custom title */}
            {/* Container for the left section */}
            <div className="flex w-full max-w-7xl">
                {/* Left section */}
                <div className="flex flex-col items-start w-full max-w-xs mr-8">
                    <div className="flex flex-col items-start mb-8">
                        <h1 className="text-5xl font-bold text-center text-white drop-shadow-lg mb-4">
                            NBA News
                        </h1>
                        <button
                            onClick={fetchNewsData}
                            className="w-full rounded-full px-8 py-4 bg-[#FF2D20] text-white font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#e02c1e] focus:outline-none focus:ring-4 focus:ring-[#FF2D20] focus:ring-opacity-50 mb-6"
                        >
                            Show All News
                        </button>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="Enter search term"
                            className="w-full rounded-full px-6 py-3 bg-white text-black shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FF2D20] transition-all mb-4"
                        />
                        <button
                            onClick={searchNewsData}
                            className="w-full rounded-full px-8 py-4 bg-[#FF2D20] text-white font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#e02c1e] focus:outline-none focus:ring-4 focus:ring-[#FF2D20] focus:ring-opacity-50"
                        >
                            Search News
                        </button>
                    </div>
                </div>

                {/* Articles section */}
                <div className="flex-grow flex flex-col items-center">
                    {error && (
                        <p className="text-red-400 font-semibold text-center mt-6 mb-6">
                            {error}
                        </p>
                    )}
                    {showAll && articles.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full max-w-8xl mt-12">
                            {articles.map((article, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
                                >
                                    <img
                                        src={
                                            article.images && article.images[0]
                                                ? article.images[0].url
                                                : "https://via.placeholder.com/600x400"
                                        }
                                        alt={
                                            article.images && article.images[0]
                                                ? article.images[0].caption
                                                : "No image available"
                                        }
                                        className="w-full h-auto object-cover rounded-md mb-4"
                                    />
                                    <h2 className="text-lg font-semibold mb-2 text-white">
                                        {article.description}
                                    </h2>
                                    <a
                                        href={article.links.web.href}
                                        className="text-blue-400 underline hover:text-blue-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Read Full Article
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
