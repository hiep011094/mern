import React from "react";
import { Link } from "react-router-dom";
import Grid from "../../contents/Gird";
import Mainvisual from "../../layout/Mainvisual";
import { images } from "../../../assets/img";
import "./styles.scss";
import Category from "../../contents/Category";
import PostNews from "../../contents/PostNews";
import Rate from "../../layout/Rate";

const Home = () => {
    return (
        <main className="p-top">
            <Mainvisual />
            <Category />
            <div className="p-top1">
                <div className="l-container">
                    <h3 className="c-ttl01">
                        new <br />
                        arrival
                    </h3>
                    <Grid column={4} mr={20}>
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
                    <Link to="/" className="c-btn02">
                        Browse More
                    </Link>
                </div>
            </div>
            <div className="p-top2">
                <figure>
                    <img
                        src={images.home.img_banner01}
                        alt="collection houses our first-ever"
                    />
                </figure>
                <div className="p-top2__inner l-container">
                    <h3 className="c-ttl01">
                        collection houses our
                        <br /> first-ever
                    </h3>
                    <Link to="/" className="c-btn01">
                        About Us
                    </Link>
                </div>
            </div>
            <PostNews />
        </main>
    );
};

export default Home;
