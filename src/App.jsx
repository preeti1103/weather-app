import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getBackgroundClass = () => {
    if (!weatherData) return "default-bg";
    const mainWeather = weatherData.weather[0].main.toLowerCase();
    if (mainWeather.includes("rain")) return "rainy-bg";
    if (mainWeather.includes("snow")) return "snowy-bg";
    if (mainWeather.includes("cloud")) return "cloudy-bg";
    if (mainWeather.includes("clear")) return "sunny-bg";
    return "default-bg";
  };

  return (
    <div className={`app-container ${getBackgroundClass()}`}>
      <h1 className="app-title">Weather App</h1>
      <SearchBar setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
