import { useState, useEffect, useRef } from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleReset = () => {
        setSearchTerm("");
        setSuggestions([]);
        setSelectedLocation(null);
        setShowDropdown(false);
        localStorage.removeItem("selectedLocation");
    };

    useEffect(() => {
        localStorage.removeItem("selectedLocation");
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.trim()) {
                fetchSuggestions();
            } else {
                setSuggestions([]);
                setShowDropdown(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const fetchSuggestions = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${
                    import.meta.env.VITE_API_URL
                }/api/locations?search=${encodeURIComponent(searchTerm)}`
            );

            if (!response.ok) throw new Error("Failed to fetch");

            const data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error("Invalid data format");
            }

            setSuggestions(data);
            setShowDropdown(data.length > 0);
        } catch (error) {
            console.error("Error:", error);
            setSuggestions([]);
            alert("Gagal memuat data. Silakan coba lagi.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelect = (location) => {
        setSelectedLocation(location);
        setSearchTerm(location.kecamatan);
        setShowDropdown(false);
        localStorage.setItem("selectedLocation", JSON.stringify(location));
    };

    return (
        <div className="min-h-screen p-4 flex items-center justify-center lg:justify-start lg:pt-40 flex-col gap-6 relative">
            <img
                src="/bg.svg"
                alt="Background"
                className="absolute bottom-0 w-full h-auto object-cover pointer-events-none -z-10 opacity-60"
                style={{ minHeight: "200px" }}
            />
            <img src="/vite.svg" alt="DKI" loading="eager" className="w-20" />
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">
                            Cari Wilayah DKI Jakarta
                        </h1>
                    </div>

                    <div className="relative" ref={dropdownRef}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setShowDropdown(true);
                            }}
                            placeholder="Masukkan nama kecamatan/kota/provinsi"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />

                        {showDropdown && (
                            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto border border-gray-200">
                                {isLoading ? (
                                    <div className="p-3 text-center text-gray-500">
                                        Memuat...
                                    </div>
                                ) : suggestions.length > 0 ? (
                                    <ul>
                                        {suggestions.map((item) => (
                                            <li
                                                key={item.id}
                                                onClick={() =>
                                                    handleSelect(item)
                                                }
                                                className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b"
                                            >
                                                <p className="font-medium">
                                                    {item.kecamatan}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {item.kota}, {item.provinsi}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-3 text-center text-gray-500">
                                        Tidak ditemukan
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {selectedLocation && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg animate-fade-in">
                            <h2 className="font-bold text-lg mb-2">
                                Lokasi Terpilih
                            </h2>
                            <div className="space-y-1">
                                <p>
                                    <span className="font-semibold">
                                        Kecamatan:
                                    </span>{" "}
                                    {selectedLocation.kecamatan}
                                </p>
                                <p>
                                    <span className="font-semibold">Kota:</span>{" "}
                                    {selectedLocation.kota}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Provinsi:
                                    </span>{" "}
                                    {selectedLocation.provinsi}
                                </p>
                            </div>
                        </div>
                    )}

                    {selectedLocation && (
                        <button
                            onClick={handleReset}
                            className="text-sm text-red-600 hover:text-red-800 cursor-pointer text-center w-full mt-4"
                        >
                            Reset Pilihan
                        </button>
                    )}
                    <h2 className="text-sm text-center mt-4">
                        Created by:{" "}
                        <a
                            href="https://ariff.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            Arif
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default App;
