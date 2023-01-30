import "./LeftColumnItem.scss";

const LeftColumnItem = ({ img, name, type, onClick, chosen }) => {
    return (
        <li className="left-column__item">
            <button
                className={`left-column__button ${
                    type === "orange" ? "left-column__button--orange" : ""
                } ${chosen ? "chosen" : ""}`}
                onClick={() => onClick(name)}
            >
                <img src={img} alt={name} className="left-column__icon" />
                {name}
            </button>
        </li>
    );
};

export default LeftColumnItem;
