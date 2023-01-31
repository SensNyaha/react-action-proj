import ProductSlider from "../ProductSlider/ProductSlider";
import "./Product.scss";

const Product = ({ content }) => {
    if (!content) {
        return null;
    }
    return (
        <div className="product">
            <ProductSlider imgArray={content.images}>
                {content.attentionText && (
                    <div className="product__attention">
                        <div className="product__attention-mark">!</div>
                        <div className="product__attention-text">
                            {content.attentionText}
                        </div>
                    </div>
                )}
            </ProductSlider>
        </div>
    );
};

export default Product;
