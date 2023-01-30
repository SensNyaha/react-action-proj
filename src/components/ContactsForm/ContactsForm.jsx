import "./ContactsForm.scss";

const ContactsForm = ({ className, onClick }) => {
    return (
        <div className={"contacts-form " + className}>
            <button
                className="contacts-form__close"
                onClick={() => onClick(false)}
            >
                X
            </button>
            <input
                type="text"
                name="name"
                required
                placeholder="Имя"
                className="contacts-form__input"
            />
            <input
                type="tel"
                name="tel"
                required
                placeholder="Телефон"
                className="contacts-form__input"
            />
            <input type="submit" className="contacts-form__submit" />
        </div>
    );
};

export default ContactsForm;
