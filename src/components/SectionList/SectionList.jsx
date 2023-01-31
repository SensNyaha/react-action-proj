import "./SectionList.scss";

const SectionList = ({ content, chosenIndex, onClick }) => {
    return (
        <ul className="section__list">
            {content &&
                content.map((item, index) => {
                    return (
                        <li
                            className={`section__item ${
                                chosenIndex === index ? "chosen" : ""
                            }`}
                            key={item.name}
                            onClick={() => onClick(index)}
                        >
                            <img
                                className="section__item-icon"
                                src={item.icon}
                                alt={item.name}
                            />
                            <h4 className="section__item-name">{item.name}</h4>
                            <div className="section__item-descr">
                                {item.description}
                            </div>
                        </li>
                    );
                })}
        </ul>
    );
};

export default SectionList;
