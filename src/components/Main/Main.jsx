import React from "react";
import context from "../../context/context";
import LeftColumn from "../LeftColumn/LeftColumn";
import MainContent from "../MainContent/MainContent";
import "./Main.scss";

const triggers = [
    {
        img: require("../../images/triggerImgs/ref.svg").default,
        name: "Справочные системы",
        descr: "Первая юридическая справочная система практических разъяснений от судей",
    },
    {
        img: require("../../images/triggerImgs/journal.svg").default,
        name: "Журналы",
        descr: "Ежемесячные практические издания о новом в работе юристов",
    },
    {
        img: require("../../images/triggerImgs/school.svg").default,
        name: "Школы",
        descr: "Честное дистанционное образование для юристов с официальным дипломом",
    },
    {
        img: require("../../images/triggerImgs/service.svg").default,
        name: "Сервисы",
        descr: "Детальная проверка контрагентов глазами юриста-практика",
    },
    {
        img: require("../../images/triggerImgs/portal.svg").default,
        name: "Порталы",
        descr: "Проверенная информация для юристов в интернете",
    },
    {
        img: require("../../images/triggerImgs/case.svg").default,
        name: "Спецпроекты",
        descr: "Вебинары, онлайн-конференции, премии и рейтинги — все для продвижения ценности профессии юриста",
    },
    {
        img: require("../../images/triggerImgs/360.svg").default,
        name: "Актион 360",
        type: "orange",
        descr: "Корпоративная справочно- образовательная система включает в себя все продукты группы Актион Право",
    },
];

const Main = () => {
    const { Provider } = context;

    return (
        <Provider value={triggers}>
            <div className="main">
                <LeftColumn />
                <MainContent page={"index"} />
            </div>
        </Provider>
    );
};

export default Main;
