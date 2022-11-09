import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../assets/img";
import Grid from "../../contents/Gird";
import Topic from "../../contents/Topic";
import Category from "../../contents/Category";
import SidebarProduct from "../../layout/sidebarProduct";
import "./styles.scss";
import Rate from "../../layout/Rate";

const Shop = () => {
    const data_pages = [{ title: "Home", link: "/" }, { title: "Shop", link: "/shop" }];

    return (
        <main className="p-shop">
            <Topic data_pages={data_pages} />
            <div className="l-container">
                <h3 className="c-ttl01">Shop with us</h3>
                <span className="count">Browse from 230 latest items</span>
                <div className="p-shop__inner">
                    <SidebarProduct />
                    <div className="p-shop__content">
                        <Grid column={3} mr={20}>
                            <Link to="/" className="c-product">
                                <span className="icon">
                                    <img src={images.common.icon01} alt="Knitted Jumper" />
                                </span>
                                <figure>
                                    <img src={images.products.img_shop01} alt="Knitted Jumper" />
                                </figure>
                                <h4 className="ttl">Knitted Jumper</h4>
                                <Rate />
                                <p className="price">$ 30.00</p>
                            </Link>
                            <Link to="/" className="c-product">
                                <span className="icon">
                                    <img src={images.common.icon01} alt="Knitted Jumper" />
                                </span>
                                <figure>
                                    <img src={images.products.img_shop02} alt="Knitted Jumper" />
                                </figure>
                                <h4 className="ttl">Knitted Jumper</h4>
                                <Rate />
                                <p className="price">$ 30.00</p>
                            </Link>
                            <Link to="/" className="c-product">
                                <span className="icon">
                                    <img src={images.common.icon01} alt="Knitted Jumper" />
                                </span>
                                <figure>
                                    <img src={images.products.img_shop03} alt="Knitted Jumper" />
                                </figure>
                                <h4 className="ttl">Knitted Jumper</h4>
                                <Rate />
                                <p className="price">$ 30.00</p>
                            </Link>
                            <Link to="/" className="c-product">
                                <span className="icon">
                                    <img src={images.common.icon01} alt="Knitted Jumper" />
                                </span>
                                <figure>
                                    <img src={images.products.img_shop04} alt="Knitted Jumper" />
                                </figure>
                                <h4 className="ttl">Knitted Jumper</h4>
                                <Rate />
                                <p className="price">$ 30.00</p>
                            </Link>
                            <Link to="/" className="c-product">
                                <span className="icon">
                                    <img src={images.common.icon01} alt="Knitted Jumper" />
                                </span>
                                <figure>
                                    <img src={images.products.img_shop05} alt="Knitted Jumper" />
                                </figure>
                                <h4 className="ttl">Knitted Jumper</h4>
                                <Rate />
                                <p className="price">$ 30.00</p>
                            </Link>
                            <Link to="/" className="c-product">
                                <span className="icon">
                                    <img src={images.common.icon01} alt="Knitted Jumper" />
                                </span>
                                <figure>
                                    <img src={images.products.img_shop06} alt="Knitted Jumper" />
                                </figure>
                                <h4 className="ttl">Knitted Jumper</h4>
                                <Rate />
                                <p className="price">$ 30.00</p>
                            </Link>
                            <Link to="/" className="c-product">
                                <span className="icon">
                                    <img src={images.common.icon01} alt="Knitted Jumper" />
                                </span>
                                <figure>
                                    <img src={images.products.img_shop07} alt="Knitted Jumper" />
                                </figure>
                                <h4 className="ttl">Knitted Jumper</h4>
                                <Rate />
                                <p className="price">$ 30.00</p>
                            </Link>
                            <Link to="/" className="c-product">
                                <span className="icon">
                                    <img src={images.common.icon01} alt="Knitted Jumper" />
                                </span>
                                <figure>
                                    <img src={images.products.img_shop08} alt="Knitted Jumper" />
                                </figure>
                                <h4 className="ttl">Knitted Jumper</h4>
                                <Rate />
                                <p className="price">$ 30.00</p>
                            </Link>
                        </Grid>
                    </div>
                </div>
            </div>
            <Category />
        </main>
    );
};

export default Shop;
