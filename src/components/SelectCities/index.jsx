import React from "react";

import './SelectCities.css';
import AppContext from "../../context";

export function SelectCities() {
    const { setCityCoordinates, setCurrentCity, setCurrentCountry, setCurrentCityName } = React.useContext(AppContext);

    const favoritesCities = [
        { value: "Minsk", country: "BY", label: "Минск" },
        { value: "Moscow", country: "RU", label: "Москва" },
        { value: "Bratislava", country: "SK", label: "Братислава" },
        { value: "Jerusalem", country: "IL", label: "Иерусалим" },
        { value: "New York,NY", country: "US", label: "Нью-Йорк" },
        { value: "Rio de Janeiro", country: "BR", label: "Рио-де-Жанейро" },
        { value: "Sydney", country: "AU", label: "Сидней" },
        { value: "Tokio", country: "JP", label: "Токио" }
    ];

    const handleSelectCity = (event) => {
        setCurrentCountry(event.target.name);
        setCurrentCity(event.target.value);
        setCurrentCityName(event.target.textContent);
        sessionStorage.setItem("city", event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentCity(event.target.elements.search.value);
        sessionStorage.setItem("city", event.target.elements.search.value);
        setCurrentCountry("");
        event.target.elements.search.value = "";
    };

    return (
        <div className="select__cities">
            <p>Поиск прогноза по городу:</p>
            <div className="top__block search-field">
                <form action="" onSubmit={handleSubmit}>
                    <input name="search" type="text" required />
                    <button type="submit">
                        <img src="assets/images/icon_loupa.svg" alt="Search" title ="Получить прогноз" />
                    </button>
                </form>
            </div>
            <p>Избранные города:</p>
            <div className="bottom__block favorites-cities">
                {favoritesCities.map((item) => (
                    <button key={item.value} value={item.value} name={item.country} onClick={handleSelectCity}>
                        <img src={`assets/flags/${item.country}.svg`} width={18} height={18} alt="" title ="" />
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    )
};
