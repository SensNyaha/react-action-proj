import Index from "../Index/Index";

import "./MainContent.scss";

const MainContent = ({ page }) => {
    let content;

    if (!page || page === "index") {
        content = <Index />;
    }
    return <div className="main__content">{content}</div>;
};

export default MainContent;
