import React from "react";
import "./styles.scss";

const SidebarProduct = () => {
  return (
    <div className="sidebar-product">
      <div className="sidebar-product__item">
        <p className="ttl">Category</p>
        <ul className="content">
          <li>
            <input id="shat" type="checkbox" name="cate[]" />
            <label htmlFor="shat">Shat</label>
          </li>
          <li>
            <input id="t_shat" type="checkbox" name="cate[]" />
            <label htmlFor="t_shat">T-shat</label>
          </li>
          <li>
            <input id="pent" type="checkbox" name="cate[]" />
            <label htmlFor="pent">Pent</label>
          </li>
          <li>
            <input id="dress" type="checkbox" name="cate[]" />
            <label htmlFor="dress">Dress</label>
          </li>
        </ul>
      </div>
      <div className="sidebar-product__item">
        <p className="ttl">Size</p>
        <ul className="content">
          <li>
            <input id="size_s" type="checkbox" name="size[]" />
            <label htmlFor="size_s">S</label>
          </li>
          <li>
            <input id="size_m" type="checkbox" name="size[]" />
            <label htmlFor="size_m">M</label>
          </li>
          <li>
            <input id="size_l" type="checkbox" name="size[]" />
            <label htmlFor="size_l">L</label>
          </li>
          <li>
            <input id="size_xl" type="checkbox" name="size[]" />
            <label htmlFor="size_xl">XL</label>
          </li>
          <li>
            <input id="size_xxl" type="checkbox" name="size[]" />
            <label htmlFor="size_xxl">XXL</label>
          </li>
        </ul>
      </div>
      <div className="sidebar-product__item">
        <p className="ttl">Color</p>
        <ul className="content">
          <li>
            <input id="color_whith" type="checkbox" name="color[]" />
            <label htmlFor="color_whith">White</label>
          </li>
          <li>
            <input id="color_green" type="checkbox" name="color[]" />
            <label htmlFor="color_green">Green</label>
          </li>
          <li>
            <input id="color_blue" type="checkbox" name="color[]" />
            <label htmlFor="color_blue">Blue</label>
          </li>
          <li>
            <input id="color_dress" type="checkbox" name="color[]" />
            <label htmlFor="color_dress">Dress</label>
          </li>
        </ul>
      </div>
      <div className="sidebar-product__item">
        <p className="ttl">Price range</p>
        <ul className="content">
          <li>
            <input id="price_01" type="checkbox" name="price[]" />
            <label htmlFor="price_01">Under 10$</label>
          </li>
          <li>
            <input id="price_02" type="checkbox" name="price[]" />
            <label htmlFor="price_02">10$ to 50$</label>
          </li>
          <li>
            <input id="price_03" type="checkbox" name="price[]" />
            <label htmlFor="price_03">50$ to 100$</label>
          </li>
          <li>
            <input id="price_04" type="checkbox" name="price[]" />
            <label htmlFor="price_04">Over 100$</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarProduct;
