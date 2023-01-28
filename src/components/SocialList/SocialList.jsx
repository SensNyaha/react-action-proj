import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import google from "./google.svg";

import "./SocialList.scss";

const socials = [
    {
        img: facebook,
        url: "http://www.facebook.com",
    },
    {
        img: twitter,
        url: "http://www.twitter.com",
    },
    {
        img: google,
        url: "http://www.google.com",
    },
];

const SocialList = () => {
    return (
        <ul className="left-column__social">
            {socials.map(({ url, img }) => (
                <li key={url} className="left-column__social-item">
                    <a href={url} className="left-column__social-link">
                        <img
                            src={img}
                            alt={url}
                            className="left-column__social-img"
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialList;
