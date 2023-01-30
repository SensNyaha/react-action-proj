import LeftColumn from "../LeftColumn/LeftColumn";
import MainContent from "../MainContent/MainContent";
import "./Main.scss";

const triggers = [
    {
        img: require("../../images/triggerImgs/ref.svg").default,
        name: "Справочные системы",
    },
    {
        img: require("../../images/triggerImgs/journal.svg").default,
        name: "Журналы",
    },
    {
        img: require("../../images/triggerImgs/school.svg").default,
        name: "Школы",
    },
    {
        img: require("../../images/triggerImgs/service.svg").default,
        name: "Сервисы",
    },
    {
        img: require("../../images/triggerImgs/portal.svg").default,
        name: "Порталы",
    },
    {
        img: require("../../images/triggerImgs/case.svg").default,
        name: "Спецпроекты",
    },
    {
        img: require("../../images/triggerImgs/360.svg").default,
        name: "Актион 360",
        type: "orange",
    },
];

const Main = () => {
    return (
        <div className="main">
            <LeftColumn triggers={triggers} />
            <MainContent page={"index"} />
        </div>
    );
};

export default Main;
