import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";

import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";
import slide6 from "./slide6.jpg";
import slide7 from "./slide7.jpg";

import "./IndexSlider.scss";

const IndexSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                effect={"fade"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="index__slider"
            >
                <SwiperSlide>
                    <img src={slide1} alt="bg-slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="bg-slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="bg-slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="bg-slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="bg-slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="bg-slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="bg-slide" />
                </SwiperSlide>

                <div className="index__slider-text">
                    <h1 className="index__slider-title">
                        Все, что <span>нужно юристу</span>
                        <br /> для повседневной работы
                    </h1>
                    <div className="index__slider-descr">
                        Издательская группа <strong>Актион Право</strong> входит
                        в медиахолдинг <strong>Актион</strong> и отвечает за
                        работу юристов. Мы помогаем решать юристам разных
                        специализаций, консалтерам и инхаусам, задачи, с
                        которыми они сталкиваются каждый день
                    </div>
                </div>
            </Swiper>
        </>
    );
};

export default IndexSlider;
