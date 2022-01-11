import React, { useState, useEffect } from 'react';
import './style.css';

const Temp = () => {

    const [searchValue, setSearchValue] = useState("delhi");

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3244c9d10790d15bd14d3e4a2426a236`;

            let res = await fetch(url);
            let data = await res.jason;

            const { temp } = data.main;
            console.log(temp);

        } catch (error) {
            console.log(error);


        }

    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <section className="inputArea">
                <div className="inputBox">

                    <input
                        type="search"
                        onFocus
                        placeholder="Search.."
                        className="search"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button
                        type="button"
                        className="searchButton"
                        id="searchButton"
                        value={searchValue}
                        onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </section>
            <artcle className="box">
                <div className="boxInner">
                    <div className="wetherSymbol">
                        <i className="wi wi-day-sunny"></i>
                    </div>
                </div>

                <div className="tempArea">
                    <div className="tempAreaInner">
                        <div className="temp">
                            25.5 &deg;C
                        </div>
                        <div className="sunny">
                            SUNNY
                            <p>Delhi, IN</p>
                        </div>
                    </div>
                    <div className="date">
                        7/18/2021,
                        4:03:03 PM
                    </div>
                </div>
                <div className="weatherInfo">

                    <div className="sunset">
                        <div className="suninfo">
                            <div className="sunweather">
                                <i className="wi wi-sunset"></i>
                            </div>
                            <div className="description">
                                <p>19:19 PM</p>
                                <span>Sunset</span>
                            </div>
                        </div>

                        <div className="suninfo">
                            <div className="sunweather">
                                <i className="wi wi-humidity"></i>
                            </div>
                            <div className="description">
                                <p>19:19 PM</p>
                                <span>Humidity</span>
                            </div>
                        </div>

                    </div>

                    <div className="sunset">
                        <div className="suninfo">
                            <div className="sunweather">
                                <i className="wi wi-sunset"></i>
                            </div>
                            <div className="description">
                                <p>19:19 PM</p>
                                <span>Sunset</span>
                            </div>
                        </div>

                        <div className="suninfo">
                            <div className="sunweather">
                                <i className="wi wi-humidity"></i>
                            </div>
                            <div className="description">
                                <p>19:19 PM</p>
                                <span>Humidity</span>
                            </div>
                        </div>

                    </div>





                </div>
            </artcle>

        </>
    )
}

export default Temp;
