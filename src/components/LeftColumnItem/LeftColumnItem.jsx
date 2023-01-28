import "./LeftColumnItem.scss";

const LeftColumnItem = ({ img, name, type }) => {
    return (
        <li className="left-column__item">
            <button
                className={`left-column__button ${
                    type === "orange" ? "left-column__button--orange" : ""
                }`}
            >
                <img src={img} alt={name} className="left-column__icon" />
                {name}
            </button>
        </li>
    );
};

export default LeftColumnItem;
