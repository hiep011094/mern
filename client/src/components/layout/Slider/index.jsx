import React from "react";
import { images } from "../../../assets/img";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "./styles.scss";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <SliderSlick className="c-slider" {...settings}>
      <div className="c-slider__item">
        <img src={images.sliders.img_slider01} alt="Slider 01" />
      </div>
      <div className="c-slider__item">
        <img src={images.sliders.img_slider02} alt="Slider 02" />
      </div>
      <div className="c-slider__item">
        <img src={images.sliders.img_slider03} alt="Slider 03" />
      </div>
    </SliderSlick>
  );
};

export default Slider;
