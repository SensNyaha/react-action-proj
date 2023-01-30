import Index from "../Index/Index";
import Section from "../Section/Section";

import "./MainContent.scss";

const MainContent = ({ page }) => {
    let content;

    if (!page || page === "index") {
        content = <Index />;
    } else {
        content = <Section page={page} />;
    }
    return <div className="main__content">{content}</div>;
};

export default MainContent;
