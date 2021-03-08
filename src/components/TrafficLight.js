import React, { useState } from 'react'
import './TrafficLight.css'

const TrafficLight = () => {

    let [select1, setSelect1] = useState("");
    let [select2, setSelect2] = useState("");
    let [select3, setSelect3] = useState("");

    const handleClick1 = () => {
        if (select2 === "selected") {
            setSelect2(select2 = "");
        } else if (select3 === "selected") {
            setSelect3(select3 = "");
        }
        setSelect1(select1 = "selected");
    };

    const handleClick2 = () => {
        if (select1 === "selected") {
            setSelect1(select1 = "");
        } else if (select3 === "selected") {
            setSelect3(select3 = "");
        }
        setSelect2(select2 = "selected");
    };

    const handleClick3 = () => {
        if (select1 === "selected") {
            setSelect1(select1 = "");
        } else if (select2 === "selected") {
            setSelect2(select2 = "");
        }
        setSelect3(select3 = "selected");
    };

    return (
        <div className="trafficLigth container rounded pt-3 mt-3">
            <div className={`light container rounded-circle bg-danger mb-1 ${select1}`} onClick={handleClick1}>
            </div>
            <div className={`light container rounded-circle bg-warning mb-1 ${select2}`} onClick={handleClick2}>
            </div>
            <div className={`light container rounded-circle bg-success ${select3}`} onClick={handleClick3}>
            </div>
        </div>
    )
}

export default TrafficLight
