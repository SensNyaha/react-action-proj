import IndexContacts from "../IndexContacts/IndexContacts";
import IndexGrid from "../IndexGrid/IndexGrid";
import IndexSlider from "../IndexSlider/IndexSlider";

import "./Index.scss";

const Index = () => {
    return (
        <div className="index">
            <IndexSlider />
            <IndexGrid />
            <IndexContacts />
        </div>
    );
};

export default Index;
