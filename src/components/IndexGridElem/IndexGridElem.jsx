import "./IndexGridElem.scss";

const IndexGridElem = ({ element: { img, name, type, descr } }) => {
    return (
        <div className="index__elem">
            <div className="index__elem-top">
                <img
                    src={img}
                    alt={name}
                    className={`index__elem-img ${
                        type === "orange" ? " index__elem-img--orange" : ""
                    }`}
                />
                {name}
            </div>
            <div className="index__elem-bottom">{descr}</div>
        </div>
    );
};

export default IndexGridElem;
