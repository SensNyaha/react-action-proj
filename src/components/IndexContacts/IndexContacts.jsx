import { useState } from "react";
import ContactsForm from "../ContactsForm/ContactsForm";
import "./IndexContacts.scss";

const IndexContacts = () => {
    const [formOpened, setFormOpened] = useState(false);

    return (
        <div className="index__contacts">
            <a href="tel:+78005112091" className="index__contacts-tel">
                +7 (800) 511 20 91
            </a>
            <div className="index__contacts-text">ответим на любой вопрос</div>
            <div
                className={`index__contacts-callme ${
                    formOpened ? "opened" : ""
                }`}
            >
                <button
                    className="index__contacts-button"
                    onClick={() => setFormOpened(true)}
                >
                    Заказать звонок
                </button>
                <ContactsForm
                    className={`index__contacts-form ${
                        formOpened ? "opened" : ""
                    }`}
                    onClick={setFormOpened}
                />
            </div>
        </div>
    );
};

export default IndexContacts;
