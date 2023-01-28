import LeftColumnItem from "../LeftColumnItem/LeftColumnItem";

import "./LeftColumnList.scss";

const LeftColumnList = ({ triggers }) => {
    return (
        <ul className="left-column__list">
            {triggers.map(({ img, name, type }) => (
                <LeftColumnItem key={name} img={img} name={name} type={type} />
            ))}
        </ul>
    );
};

export default LeftColumnList;
