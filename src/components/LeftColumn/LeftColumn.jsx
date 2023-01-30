import { useContext, useEffect, useState } from "react";
import context from "../../context/context";
import LeftColumnList from "../LeftColumnList/LeftColumnList";
import SocialList from "../SocialList/SocialList";
import bigLogo from "./big-logo.svg";

import "./LeftColumn.scss";

const LeftColumn = () => {
    const [year, setYear] = useState("");
    const { setMainSectionChosen } = useContext(context);

    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear());
    }, []);

    return (
        <div className="left-column">
            <div
                className="left-column__logo"
                onClick={() => setMainSectionChosen("index")}
            >
                <img src={bigLogo} alt="Большой логотип" />
            </div>
            <LeftColumnList />
            <SocialList />
            <div className="left-column__info">
                © Актион-диджитал, Медиагруппа Актион-МЦФЭР, {year}
            </div>
        </div>
    );
};

export default LeftColumn;
