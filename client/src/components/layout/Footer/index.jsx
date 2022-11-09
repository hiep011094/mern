import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../assets/img";
import Grid from "../../contents/Gird";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__top">
        <Grid column={4}>
          <div className="content">
            <span className="icon">
              <img src={images.common.icon02} alt="Fast & Free Delivery" />
            </span>
            <p>Fast & Free Delivery</p>
            <span>Free delivery on all orders</span>
          </div>
          <div className="content">
            <span className="icon">
              <img src={images.common.icon03} alt="Fast & Free Delivery" />
            </span>
            <p>Fast & Free Delivery</p>
            <span>Free delivery on all orders</span>
          </div>
          <div className="content">
            <span className="icon">
              <img src={images.common.icon04} alt="Fast & Free Delivery" />
            </span>
            <p>Fast & Free Delivery</p>
            <span>Free delivery on all orders</span>
          </div>
          <div className="content">
            <span className="icon">
              <img src={images.common.icon05} alt="Fast & Free Delivery" />
            </span>
            <p>Fast & Free Delivery</p>
            <span>Free delivery on all orders</span>
          </div>
        </Grid>
      </div>
      <div className="c-footer__inner">
        <div className="c-footer__content">
          <div className="left">
            <Link to="/" className="logo">
              <img src={images.common.logo_white} alt="SHION HOUSE" />
            </Link>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <ul className="icon">
              <li>
                <Link to="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="right__item">
              <p className="ttl">Quick links</p>
              <ul>
                <li>
                  <Link to="/">Image Licensin</Link>
                </li>
                <li>
                  <Link to="/">Style Guide</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="right__item">
              <p className="ttl">Shop Category</p>
              <ul>
                <li>
                  <Link to="/">Image Licensin</Link>
                </li>
                <li>
                  <Link to="/">Style Guide</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="right__item">
              <p className="ttl">Pertners</p>
              <ul>
                <li>
                  <Link to="/">Image Licensin</Link>
                </li>
                <li>
                  <Link to="/">Style Guide</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="right__item">
              <p className="ttl">Get in touch</p>
              <ul>
                <li>
                  <Link to="/">(89) 982-278 356</Link>
                </li>
                <li>
                  <Link to="/">demo@colorlib.com</Link>
                </li>
                <li>
                  <Link to="/">67/A, Colorlib, Green road, NYC</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="coppy">
        Copyright ©2022 All rights reserved | This template
      </p>
    </footer>
  );
};

export default Footer;
