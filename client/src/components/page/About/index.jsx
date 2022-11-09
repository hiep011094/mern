import React from "react";
import Topic from "../../contents/Topic";
import { images } from "../../../assets/img";
import "./styles.scss";
import Category from "../../contents/Category";

const About = ({ data_page }) => {
  const data_pages = [{title:"Home",link: "/"}, { title: "About", link: "/about" }];
  return (
    <main className="p-about">
      <Topic data_pages={data_pages} />
      <div className="l-container p-about__inner">
        <section>
          <h3 className="c-ttl01">Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            <img src={images.about.img_about01} alt="Our Story" />
          </p>
        </section>
        <section>
          <h3 className="c-ttl01">Journey start from</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            <img src={images.about.img_about02} alt="Our Story" />
          </p>
        </section>
        <section>
          <h3 className="c-ttl01">2020</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </section>
      </div>
      <Category />
    </main>
  );
};

export default About;
