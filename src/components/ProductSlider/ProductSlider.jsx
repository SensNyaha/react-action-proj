import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";

import "./ProductSlider.scss";

const ProductSlider = ({ imgArray, children }) => {
    return (
        <Swiper
            spaceBetween={0}
            effect={"fade"}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="product__slider"
        >
            {imgArray.map((img) => {
                return (
                    <SwiperSlide key={img}>
                        <img src={img} alt="bg-slide" />
                    </SwiperSlide>
                );
            })}

            {children}
        </Swiper>
    );
};

export default ProductSlider;
