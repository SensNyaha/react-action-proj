import { useContext } from "react";

import context from "../../context/context";

import LeftColumnItem from "../LeftColumnItem/LeftColumnItem";

import "./LeftColumnList.scss";

const LeftColumnList = () => {
    const { sections, mainSectionChosen, setMainSectionChosen } =
        useContext(context);
    return (
        <ul className="left-column__list">
            {sections.map(({ img, name, type }) => (
                <LeftColumnItem
                    key={name}
                    img={img}
                    name={name}
                    type={type}
                    chosen={mainSectionChosen === name}
                    onClick={setMainSectionChosen}
                />
            ))}
        </ul>
    );
};

export default LeftColumnList;
