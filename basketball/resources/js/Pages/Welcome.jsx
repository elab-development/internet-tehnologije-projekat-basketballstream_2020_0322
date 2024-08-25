import { Link, Head } from "@inertiajs/react";
import "../../css/app.css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Basketball app" />
            <div className="bg-gradient-to-b from-blue-900 via-gray-900 to-black text-gray-200">
                <img
                    id="background"
                    className="absolute top-0 left-0 opacity-10 h-screen w-screen object-cover"
                    src="https://images.hdqwalls.com/wallpapers/nba-infinite-1x.jpg"
                />
                <div className="relative min-h-screen flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-5xl px-6 lg:max-w-7xl">
                        <header className="flex justify-between items-center py-10">
                            <div className="text-3xl font-bold text-center lg:text-left">
                                <span className="text-[#FF2D20]">NBA</span> App
                            </div>
                            <nav className="flex space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-4 py-2 bg-[#FF2D20] text-white transition hover:bg-[#FF2D20]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        Profil
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-4 py-2 bg-[#FF2D20] text-white transition hover:bg-[#FF2D20]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                        >
                                            Ulogujte se
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-4 py-2 bg-white text-black transition hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2D20]"
                                        >
                                            Registracija
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-10">
                            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                                <Link
                                    href={route("striming")}
                                    className="group block rounded-lg bg-white/5 p-6 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full items-stretch overflow-hidden rounded-lg shadow-lg"
                                    >
                                        <img
                                            src="https://www.freepnglogos.com/uploads/nba-logo-png/nba-all-star-game-full-team-lebron-team-giannis-18.png"
                                            alt="NBA LOGO"
                                            className="h-30 w-30 object-cover object-center transition duration-500 ease-in-out transform hover:scale-110 rounded-lg shadow-lg mx-auto"
                                        />
                                    </div>

                                    <div
                                        id="docs-card-content"
                                        className="mt-6 flex items-center gap-6"
                                    >
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                            <svg
                                                className="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#FF2D20"
                                                    d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold text-white">
                                                Statistike NBA igrača
                                            </h2>
                                            <p className="mt-4 text-sm text-gray-400">
                                                Ova aplikacija pruža detaljne
                                                statistike NBA igrača, timova i
                                                utakmica. Istražite sve
                                                funkcionalnosti aplikacije kako
                                                biste dobili kompletan pregled
                                                najnovijih statističkih
                                                podataka.
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href={route("live")}
                                    className="group block rounded-lg bg-white/5 p-6 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full items-stretch overflow-hidden rounded-lg shadow-lg"
                                    >
                                        <img
                                            src="https://www.freepnglogos.com/uploads/nba-logo-png/nba-all-star-game-full-team-lebron-team-giannis-18.png"
                                            alt="NBA LOGO"
                                            className="h-30 w-30 object-cover object-center transition duration-500 ease-in-out transform hover:scale-110 rounded-lg shadow-lg mx-auto"
                                        />
                                    </div>

                                    <div
                                        id="docs-card-content"
                                        className="mt-6 flex items-center gap-6"
                                    >
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                            <svg
                                                className="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <g fill="#FF2D20">
                                                    <path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z" />
                                                </g>
                                            </svg>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold text-white">
                                                Live vesti
                                            </h2>
                                            <p className="mt-4 text-sm text-gray-400">
                                                Takođe vam nudimo mogućnost
                                                praćenja i pregledanja
                                                highlighta i najnovnijih vesti
                                                iz sveta NBA, za sezonu
                                                2023/2024.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </main>

                        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
                            NBA aplikacija - ITEH 2024
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
