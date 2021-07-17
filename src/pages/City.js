import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
import LoadingCard from "../components/LoadingCard";

const City = () => {
    const [weatherData, setWeatherData] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    let {ville} = useParams();

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${ville}&units=metric&lang=fr`)
            .then((res) => {
                setWeatherData(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });

    }, [ville]);

    if (isLoading) {
        return (
            <LoadingCard/>
        )
    }

    return (
        <section className="vh-100 bg-light">
            <div className="container py-5 h-100">

                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <WeatherCard weather={weatherData}/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default City;
