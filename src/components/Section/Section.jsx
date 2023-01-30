import { useContext, useEffect, useState } from "react";
import context from "../../context/context";
import "./Section.scss";

const Section = ({ page }) => {
    const { sections, mainSectionChosen } = useContext(context);
    const [pageInfo, setPageInfo] = useState(null);

    useEffect(() => {
        setPageInfo(sections.find((section) => section.name === page));
    }, [page, sections]);

    return (
        <div className="section">
            <div className="section__left">
                <div className="section__info">
                    <h3 className="section__info-title">{pageInfo.title}</h3>
                    <div className="section__info-transcr">
                        {pageInfo.transcript}
                    </div>
                </div>
                <ul className="section__list">
                    <li className="section__item">
                        <h4 className="section__item-name">Law system</h4>
                        <div className="section__item-descr">spravochnaya</div>
                    </li>
                </ul>
            </div>
            <div className="section__right product">
                <div className="product-slider">IMGIMGIGMIGMGIMGIMGIGM</div>
            </div>
        </div>
    );
};

export default Section;
