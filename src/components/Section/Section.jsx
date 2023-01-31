import { useContext, useEffect, useState } from "react";
import context from "../../context/context";
import SectionList from "../SectionList/SectionList";
import "./Section.scss";

const Section = ({ page }) => {
    const { sections } = useContext(context);
    const [pageInfo, setPageInfo] = useState({});

    const [chosenSectionElementIndex, setChosenSectionElementIndex] =
        useState(0);

    useEffect(() => {
        setChosenSectionElementIndex(0);
    }, [page]);

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
                <SectionList
                    content={pageInfo.sectionElements}
                    chosenIndex={chosenSectionElementIndex}
                    onClick={setChosenSectionElementIndex}
                />
            </div>
            <div className="section__right product">
                <div className="product-slider">IMGIMGIGMIGMGIMGIMGIGM</div>
            </div>
        </div>
    );
};

export default Section;
