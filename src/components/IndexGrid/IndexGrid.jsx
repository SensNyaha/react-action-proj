import { useContext } from "react";
import context from "../../context/context";

import IndexGridElem from "../IndexGridElem/IndexGridElem";

import "./IndexGrid.scss";

const IndexGrid = () => {
    const { sections } = useContext(context);

    return (
        <div className="index__grid">
            <div className="index__elem index__elem--first">
                В <span>Актион Право</span> найдется классный продукт для
                каждого юриста
            </div>
            {sections.map((section) => {
                return <IndexGridElem key={section.name} element={section} />;
            })}
        </div>
    );
};

export default IndexGrid;
