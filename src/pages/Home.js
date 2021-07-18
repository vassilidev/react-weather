import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import LoadingCard from "../components/LoadingCard";
import getCityData from "../action/city";
// eslint-disable-next-line no-unused-vars
import WeatherCard from "../components/WeatherCard";
import {Container} from "react-bootstrap";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [maxCities, setMaxCities] = useState(4);
    const [weatherData, setWeatherData] = useState([]);
    const [customCity, setCustomCity] = useState("");

    const cities = [
        'Suresnes',
        'Toulon',
        'Marseille',
        'Lyon',
        'Nice',
        'Toulouse',
        'Nantes',
        'Montpellier',
        'Strasbourg',
        'Bordeaux',
        'Lille',
        'Rennes',
        'Reims',
        'Saint-Étienne',
    ];

    useEffect(() => {
        getCitiesData();
    }, [maxCities]); // eslint-disable-line react-hooks/exhaustive-deps

    function handleCustomCity(e) {
        e.preventDefault();

        getCityData(customCity)
            .then(data => {
                let joined = weatherData.concat(data)
                setWeatherData(joined);
                setCustomCity("");
            });
    }

    function getCitiesData() {
        const randomCities = cities.sort((a, b) => 0.5 - Math.random());
        randomCities.length = maxCities;

        let dataCities = [];

        const requests = randomCities.map(city =>
            getCityData(city).then(data => {
                dataCities.push(data);
            })
        )

        Promise.all(requests).then(() => {
            setWeatherData(dataCities);
            setIsLoading(false);
        })
    }

    if (isLoading) {
        return (
            <LoadingCard/>
        );
    }

    return (
        <div>
            <Header/>
            <Container>
                <label htmlFor="customRange1" className="form-label">
                    Nombre de villes
                </label>
                <input
                    type="range"
                    step="1"
                    className="form-range"
                    id="customRange1"
                    min="1"
                    max={cities.length}
                    value={maxCities}
                    onChange={(e) => setMaxCities(e.target.value)}
                />
                <div className="row">
                    {weatherData.map(city =>
                        <WeatherCard weather={city}/>
                    )}
                </div>

                <hr/>


                <input
                    type="text"
                    className="form-control"
                    placeholder="Une ville que j'aime... (Ex: Suresnes)"
                    value={customCity}
                    onChange={(e) => setCustomCity(e.target.value)}
                />

                <button className="btn btn-primary" onClick={handleCustomCity}>
                    Ajouter
                </button>
            </Container>

        </div>
    );
}

export default Home;
