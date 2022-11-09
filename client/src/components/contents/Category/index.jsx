import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../assets/img";
import Grid from "../Gird";
import "./styles.scss";

const Category = () => {
  return (
    <div className="c-category">
      <Grid column={4} mr={20}>
        <div className="box">
          <figure>
            <img src={images.common.img_01} alt="" />
          </figure>
          <Link to="/" className="ttl">
            Glasses
          </Link>
          <Link to="/" className="c-btn01">
            Shop Now
          </Link>
        </div>
        <div className="box">
          <figure>
            <img src={images.common.img_02} alt="" />
          </figure>
          <Link to="/" className="ttl">
            Watches
          </Link>
          <Link to="/" className="c-btn01">
            Shop Now
          </Link>
        </div>
        <div className="box">
          <figure>
            <img src={images.common.img_03} alt="" />
          </figure>
          <Link to="/" className="ttl">
            Jackets
          </Link>
          <Link to="/" className="c-btn01">
            Shop Now
          </Link>
        </div>
        <div className="box">
          <figure>
            <img src={images.common.img_04} alt="" />
          </figure>
          <Link to="/" className="ttl">
            Clothes
          </Link>
          <Link to="/" className="c-btn01">
            Shop Now
          </Link>
        </div>
      </Grid>
    </div>
  );
};

export default Category;
