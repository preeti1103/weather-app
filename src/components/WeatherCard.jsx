import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

function WeatherCard({ weatherData }) {
    let localTime = "Loading...";
    if (weatherData?.timezone !== undefined) {
        const offsetMinutes = weatherData.timezone / 60;
        localTime = dayjs()
            .utcOffset(offsetMinutes)
            .format("dddd, MMM D, YYYY h:mm A");
    }

    // Pick weather background (already handled in App.jsx)
    return (
        <div className="weather-screen">
            <h1 className="city">{weatherData.name}</h1>
            <p className="local-time">{localTime}</p>
            <p className="big-temp">{Math.round(weatherData.main.temp)}°</p>
            <p className="condition">{weatherData.weather[0].description}</p>
            <p className="high-low">
                H:{Math.round(weatherData.main.temp_max)}° L:{Math.round(weatherData.main.temp_min)}°
            </p>
        </div>
    );
}

export default WeatherCard;
