import React, { useState } from "react";
import context from "../../context/context";
import LeftColumn from "../LeftColumn/LeftColumn";
import MainContent from "../MainContent/MainContent";
import "./Main.scss";

const sections = [
    {
        img: require("../../images/triggerImgs/ref.svg").default,
        name: "Справочные системы",
        descr: "Первая юридическая справочная система практических разъяснений от судей",
        title: "Первая юридическая справочная система с готовыми решениями повседневных задач",
        transcript: "Расшифровка раздела",
        sectionElements: [
            {
                icon: require("../../images/sectionElements/yu.svg").default,
                name: "Система Юрист",
                description: "Юридическая справочная система",
                images: [
                    require("../../images/sectionElements/lawSystemPhoto.jpg")
                        .default,
                ],
                attentionText:
                    "Доступ с любого устройства без привязки к рабочему компьютеру",
                logo: require("../../images/sectionElements/lawSystem.svg"),
                text: {
                    title: "Работать легче, когда есть Система Юрист",
                    text: "Каждую рекомендацию в Системе проверяют судьи арбитражных судов, юристы компаний и эксперты. В Систему входит правовая база, судебные решения, образцы документов, видеоматериалы, экспертная поддержка и электронные версии журналов и книг.",
                },
                buttonsText: {
                    blue: "Купить Систему",
                    white: "Посмотреть бесплатно",
                },
            },
        ],
    },
    {
        img: require("../../images/triggerImgs/journal.svg").default,
        name: "Журналы",
        descr: "Ежемесячные практические издания о новом в работе юристов",
        sectionElements: [
            {
                icon: require("../../images/sectionElements/yu.svg").default,
                name: "Юрист компании",
                description: "Практический журнал для юриста",
                images: [
                    require("../../images/sectionElements/companyLawyerJournal.jpg")
                        .default,
                ],
                attentionText: "50 000 юристов читают журнал ежемесячно",
                logo: require("../../images/sectionElements/companyLawyer.svg"),
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Журнал подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Купить журнал",
                    white: "Почитать  бесплатно",
                },
            },
            {
                icon: require("../../images/sectionElements/ap.svg").default,
                name: "Арбитражная практика для юристов",
                description: "Журнал о том, как выиграть спор в суде",
                images: [
                    require("../../images/sectionElements/arbitrPracticeJournal.jpg")
                        .default,
                ],
                attentionText: "50 000 юристов читают журнал ежемесячно",
                logo: require("../../images/sectionElements/arbitrPractice.svg"),
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Журнал подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Купить журнал",
                    white: "Почитать  бесплатно",
                },
            },
        ],
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

    const [mainSectionChosen, setMainSectionChosen] = useState(null);

    return (
        <Provider value={{ sections, mainSectionChosen, setMainSectionChosen }}>
            <div className="main">
                <LeftColumn />
                <MainContent page={mainSectionChosen} />
            </div>
        </Provider>
    );
};

export default Main;
