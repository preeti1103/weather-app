import { useState } from "react";
import axios from "axios";

function SearchBar({ setWeatherData }) {
    const [city, setCity] = useState("");

    const handleSearch = async () => {
        if (!city) return alert("Please enter a city name");

        try {
            // Temporary placeholder API key (replace once yours is active)
            const API_KEY = "5e65ec4987baadf06980f486430f7c7d";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

            const response = await axios.get(url);
            setWeatherData(response.data);
        } catch (error) {
            alert("Error fetching data. Check API key or city name.");
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>

    );
}

export default SearchBar;
