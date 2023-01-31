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
                    require("../../images/sectionElements/lawSystemPhoto.jpg"),
                ],
                attentionText:
                    "Доступ с любого устройства без привязки к рабочему компьютеру",
                logo: require("../../images/sectionElements/lawSystem.svg")
                    .default,
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
        title: "Практическая помощь без информационного шума",
        transcript: "Расшифровка раздела",
        sectionElements: [
            {
                icon: require("../../images/sectionElements/yu.svg").default,
                name: "Юрист компании",
                description: "Практический журнал для юриста",
                images: [
                    require("../../images/sectionElements/companyLawyerJournal.jpg"),
                ],
                attentionText: "50 000 юристов читают журнал ежемесячно",
                logo: require("../../images/sectionElements/companyLawyer.svg")
                    .default,
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
                    require("../../images/sectionElements/arbitrPracticeJournal.jpg"),
                ],
                attentionText: "50 000 юристов читают журнал ежемесячно",
                logo: require("../../images/sectionElements/arbitrPractice.svg")
                    .default,
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
                icon: require("../../images/sectionElements/ts.svg").default,
                name: "Трудовые споры",
                description: "Практика разрешения трудовых конфликтов",
                images: [
                    require("../../images/sectionElements/queriesJournal.jpg"),
                ],
                attentionText: "50 000 юристов читают журнал ежемесячно",
                logo: require("../../images/sectionElements/queries.svg")
                    .default,
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
                icon: require("../../images/sectionElements/kyu.svg").default,
                name: "Корпоративный юрист",
                description: "Журнал о лучших по праву",
                images: [
                    require("../../images/sectionElements/corporateLawyerJournal.jpg"),
                ],
                attentionText: "50 000 юристов читают журнал ежемесячно",
                logo: require("../../images/sectionElements/corporateLawyer.svg")
                    .default,
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
                icon: require("../../images/sectionElements/up.svg").default,
                name: "Уголовный процесс",
                description: "Практика успешной защиты и обвинения",
                images: [
                    require("../../images/sectionElements/lawProcessJournal.jpg"),
                ],
                attentionText: "50 000 юристов читают журнал ежемесячно",
                logo: require("../../images/sectionElements/lawProcess.svg")
                    .default,
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
        title: "Повышение квалификации с официальным дипломом",
        transcript:
            "Честное дистанционное образование для юристов с официальным дипломом",
        sectionElements: [
            {
                icon: require("../../images/sectionElements/yu.svg").default,
                name: "Высшая школа Юрист компании",
                description: "Обучение юристов онлайн",
                images: [
                    require("../../images/sectionElements/highSchoolScreen.jpg"),
                ],
                attentionText: "80 000 юристов посещают сервис ежемесячно",
                logo: require("../../images/sectionElements/highSchool.svg")
                    .default,
                text: {
                    title: "Обучение для тех, кто ценит юридическое образование",
                    text: "Лучший способ повысить квалификацию и ценность на юридическом рынке в онлайн-формате. Все программы Школы состоят из курсов, в которые входят интересные видеолекции, продуманные конспекты, тесты и другие учебные материалы, полезные в работе. По итогам обучения — официальный Диплом гособразца с сертификатом европейского стандарта качества EQAVET.",
                },
                buttonsText: {
                    blue: "Купить доступ",
                    white: "Попробовать бесплатно",
                },
            },
            {
                icon: require("../../images/sectionElements/yu.svg").default,
                name: "Корпоративная школа",
                description: "Обучение юридических отделов онлайн",
                images: [
                    require("../../images/sectionElements/corporateSchoolScreen.jpg"),
                ],
                attentionText: "80 000 юристов посещают сервис ежемесячно",
                logo: require("../../images/sectionElements/corporateSchool.svg")
                    .default,
                text: {
                    title: "Обучение для тех, кто понимает плюсы корпоративного образования",
                    text: "Корпоративная школа - это способ повысить квалификацию и ценность на юридическом рынке в онлайн-формате. Все программы Школы состоят из курсов, в которые входят интересные видеолекции, продуманные конспекты, тесты и другие учебные материалы, полезные в работе.",
                },
                buttonsText: {
                    blue: "Купить доступ",
                    white: "Попробовать бесплатно",
                },
            },
        ],
    },
    {
        img: require("../../images/triggerImgs/service.svg").default,
        name: "Сервисы",
        descr: "Детальная проверка контрагентов глазами юриста-практика",
        title: "Детальная проверка контрагентов глазами юриста-практика",
        transcript:
            "Сервис поможет определить, способна ли компания нести ответственность за свои обязательства",
        sectionElements: [
            {
                icon: require("../../images/sectionElements/yu.svg").default,
                name: "Юрист компании Контрагенты",
                description: "Проверка контрагентов для юриста",
                images: [
                    require("../../images/sectionElements/contragentsScreen.jpg"),
                ],
                attentionText: "80 000 юристов посещают сервис ежемесячно",
                logo: require("../../images/sectionElements/contragents.svg")
                    .default,
                text: {
                    title: "Три самые правовые буквы",
                    text: "Ежедневно на сайте срочные новости, ответы на вопросы юристов, блоги, практические статьи с инструкциями и образцами, правовая база и тематические подборки - все, чтобы юрист мог надежно и быстро укрепить правовую позицию.",
                },
                buttonsText: {
                    blue: "Купить доступ",
                    white: "Попробовать бесплатно",
                },
            },
        ],
    },
    {
        img: require("../../images/triggerImgs/portal.svg").default,
        name: "Порталы",
        descr: "Проверенная информация для юристов в интернете",
        title: "Практическая помощь без информационного шума",
        transcript: "Расшифровка раздела",
        sectionElements: [
            {
                icon: require("../../images/sectionElements/yuMini.svg")
                    .default,
                name: "LAW.RU",
                description: "Сайт журнала «Юрист компании»",
                images: [
                    require("../../images/sectionElements/companyLawyerScreen.jpg"),
                ],
                attentionText: "120 000 юристов посещают сайт ежемесячно",
                logo: require("../../images/sectionElements/companyLawyer.svg")
                    .default,
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Сервис подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Перейти на сайт",
                },
            },
            {
                icon: require("../../images/sectionElements/up.svg").default,
                name: "UGPR.RU",
                description: "Сайт журнала «Уголовный процесс»",
                images: [
                    require("../../images/sectionElements/lawProcessScreen.jpg"),
                ],
                attentionText: "110 000 юристов посещают сайт ежемесячно",
                logo: require("../../images/sectionElements/lawProcess.svg")
                    .default,
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Сервис подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Перейти на сайт",
                },
            },
            {
                icon: require("../../images/sectionElements/ts.svg").default,
                name: "TSPOR.RU",
                description: "Сайт журнала «Трудовые споры»",
                images: [
                    require("../../images/sectionElements/queriesScreen.jpg"),
                ],
                attentionText: "180 000 юристов посещают сайт ежемесячно",
                logo: require("../../images/sectionElements/queries.svg")
                    .default,
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Сервис подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Перейти на сайт",
                },
            },
            {
                icon: require("../../images/sectionElements/ap.svg").default,
                name: "ARBITR-PRAKTIKA.RU",
                description: "Сайт журнала «Арбитражная практика для юристов»",
                images: [
                    require("../../images/sectionElements/lawProcessScreen.jpg"),
                ],
                attentionText: "110 000 юристов посещают сайт ежемесячно",
                logo: require("../../images/sectionElements/arbitrPractice.svg")
                    .default,
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Сервис подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Перейти на сайт",
                },
            },
        ],
    },
    {
        img: require("../../images/triggerImgs/case.svg").default,
        name: "Спецпроекты",
        descr: "Вебинары, онлайн-конференции, премии и рейтинги — все для продвижения ценности профессии юриста",
        title: "Практическая помощь без информационного шума",
        transcript: "Расшифровка раздела",
        sectionElements: [
            {
                icon: require("../../images/sectionElements/yuMini.svg")
                    .default,
                name: "Вебинары и онлайн конференции",
                description: "Расшифоровка",
                images: [
                    require("../../images/sectionElements/webinarsScreen.jpg"),
                ],
                logo: require("../../images/sectionElements/webinars.svg")
                    .default,
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Журнал подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Записаться на вебинар",
                },
            },
            {
                icon: require("../../images/sectionElements/yuMini.svg")
                    .default,
                name: "Форум Системы Юрист в Кремле",
                description: "Расшифоровка",
                images: [
                    require("../../images/sectionElements/forum1.jpg"),
                    require("../../images/sectionElements/forum2.jpg"),
                ],
                logo: require("../../images/sectionElements/webinars.svg")
                    .default,
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Журнал подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Купить билет",
                },
            },
            {
                icon: require("../../images/sectionElements/yuMini.svg")
                    .default,
                name: "Премия «Юрист компании»",
                description: "Всероссийская правовая премия",
                images: [
                    require("../../images/sectionElements/award1.jpg"),
                    require("../../images/sectionElements/award2.jpg"),
                ],
                logo: require("../../images/sectionElements/webinars.svg")
                    .default,
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Журнал подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Посмотреть запись",
                },
            },
            {
                icon: require("../../images/sectionElements/s.svg").default,
                name: "Премия «Корпоративный юрист»",
                description: "Лучшие юридические департаменты",
                images: [
                    require("../../images/sectionElements/award3.jpg"),
                    require("../../images/sectionElements/award4.jpg"),
                ],
                logo: require("../../images/sectionElements/webinars.svg")
                    .default,
                text: {
                    title: "Для всех, кого интересует правовая безопасность бизнеса",
                    text: "Журнал подходит для любых юристов любых компаний. Каждый месяц публикует готовые решения правовых задач, обзоры судебной практики, интервью с юристами компаний, значимые процессы, ноу-хау коллег-юристов. ",
                },
                buttonsText: {
                    blue: "Посмотреть запись",
                },
            },
        ],
    },
    {
        img: require("../../images/triggerImgs/360.svg").default,
        name: "Актион 360",
        type: "orange",
        descr: "Корпоративная справочно-образовательная система включает в себя все продукты группы Актион Право",
        title: "Корпоративная справочно-образовательная система",
        transcript: "Расшифровка сервиса",
        sectionElements: [
            {
                icon: require("../../images/sectionElements/a.svg").default,
                name: "Актион 360",
                description: "Головной сервис",
                images: [
                    require("../../images/sectionElements/action360Screen.jpg"),
                ],
                attentionText: "300 000 юристов посещают сервис ежемесячно",
                logo: require("../../images/sectionElements/action360.svg")
                    .default,
                text: {
                    title: "Единое решение для ключевых служб компании",
                    text: "Справочные системы, онлайн-школы и сервисы — все лучшие продукты медиахолдинга Актион собраны в одном месте. Удобные инструменты для сотрудников, от которых зависит эффективность компании.",
                },
                buttonsText: {
                    blue: "Купить доступ",
                    white: "Попробовать бесплатно",
                },
            },
        ],
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
