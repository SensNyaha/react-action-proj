import ProductSlider from "../ProductSlider/ProductSlider";
import "./Product.scss";

const Product = ({ content }) => {
    if (!content) {
        return null;
    }

    const { images, attentionText, logo, text, buttonsText } = content;
    return (
        <div className="product">
            <ProductSlider imgArray={images}>
                {attentionText && (
                    <div className="product__attention">
                        <div className="product__attention-mark">!</div>
                        <div className="product__attention-text">
                            {attentionText}
                        </div>
                    </div>
                )}
            </ProductSlider>
            <img src={logo} alt="" className="product__icon" />
            <h4 className="product__title">{text.title}</h4>
            <div className="product__descr">{text.text}</div>

            <div className="product__buttons">
                {buttonsText.blue && (
                    <button className="product__button product__button--blue">
                        {buttonsText.blue}
                    </button>
                )}
                {buttonsText.white && (
                    <button className="product__button product__button--white">
                        {buttonsText.white}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;
