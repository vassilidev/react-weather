import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function getCityData(city) {
    const promise =
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric&lang=fr`);

    return promise.then((response) => response.data);
}

export default getCityData;