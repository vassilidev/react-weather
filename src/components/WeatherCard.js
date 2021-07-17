import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWind, faTint, faTachometerAlt, faMapPin} from "@fortawesome/free-solid-svg-icons";
import {Card} from 'react-bootstrap'

const WeatherCard = (props) => {
    const {weather} = props;

    return (
        <Card className="rounded-3">
            <Card.Body className="p-4">

                <div className="d-flex">
                    <h6 className="flex-grow-1">
                        <FontAwesomeIcon icon={faMapPin}/>{' '}
                        {weather.name + ', ' + weather.sys.country}
                    </h6>
                    <div>
                        <img
                            src={"https://flagcdn.com/" + weather.sys.country.toLowerCase() + ".svg"}
                            style={{width: '32px'}}
                            alt=''
                        />
                    </div>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                    <h6 className="display-4 mb-0 font-weight-bold">
                        {Math.round(weather.main.temp)}°C
                    </h6>
                    <span className="small text-capitalize">
                        {weather.weather[0].description}
                    </span>
                </div>

                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <div>
                            <FontAwesomeIcon icon={faWind}/>
                            <span className="ms-1">{weather.wind.speed} km/h</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTint}/>
                            <span className="ms-1">{weather.main.humidity} % </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTachometerAlt}/>
                            <span className="ms-1"> {weather.main.pressure} hPa </span>
                        </div>
                    </div>
                    <div>
                        <img
                            src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"}
                            width="100px"
                            alt=""/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default WeatherCard;
