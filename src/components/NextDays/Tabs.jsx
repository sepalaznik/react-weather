import React from "react";

import './NextDays.css';

export function Tabs() {
    const tabsControl = [
        {
            value: "На неделю",
        },
        {
            value: "На 2 недели",
        },
        {
            value: "На месяц",
        },
    ]

    return (
        <div className="tabs__block">
            <div className="select__tabs">
                {tabsControl.map(item => (
                    <div className="tab active" key={item.value}>
                        {item.value}
                    </div>
                ))}
            </div>
            <div className="close">
                <span>Отменить</span>
                <img src="assets/images/icon_close.svg" alt="Close" />
            </div>
        </div>
    )
};
