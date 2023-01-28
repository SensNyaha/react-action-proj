import { useEffect, useState } from "react";
import LeftColumnList from "../LeftColumnList/LeftColumnList";
import SocialList from "../SocialList/SocialList";
import bigLogo from "./big-logo.svg";

import "./LeftColumn.scss";

const LeftColumn = ({ triggers }) => {
    const [year, setYear] = useState("");

    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear());
    }, []);

    return (
        <div className="left-column">
            <div className="left-column__logo">
                <img src={bigLogo} alt="Большой логотип" />
            </div>
            <LeftColumnList triggers={triggers} />
            <SocialList />
            <div className="left-column__info">
                © Актион-диджитал, Медиагруппа Актион-МЦФЭР, {year}
            </div>
        </div>
    );
};

export default LeftColumn;
