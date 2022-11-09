import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { images } from "../../../assets/img";
import { Link } from "react-router-dom";
import Search from "../../search";
import { useSelector } from "react-redux";
import axios from "axios";

const Header = ({ handleBtnAuth }) => {
  const wrapperRef = useRef(null);

  const auth = useSelector(state => state.auth)

  const { user, isLogged } = auth
  // console.log(auth)
  const refPopup = useRef();
  const [popup, setPopup] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const handlePopup = () => {

    const childEl = refPopup.current.nextSibling.childNodes;
    let childHeight = 0;
    childEl.forEach((element) => {
      childHeight += element.offsetHeight;
    });
    if (!popup) {
      refPopup.current.nextSibling.style.height = childHeight + "px";
    } else {
      refPopup.current.nextSibling.style.height = 0;
    }
    setPopup(!popup);
  };

  const handleIsSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleLogout = async () => {
    try {
      await axios.get('/api/v1/user/logout')
      localStorage.removeItem('firstLogin')
      window.location.href = "/"
    } catch (err) {
      window.location.href = "/"
    }
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        refPopup.current.nextSibling.style.height = 0;
        setPopup(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", (event) => handleClickOutside(event));
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <header className="c-header">
      <div className="c-header__inner">
        <div className="c-header__left">
          <h1 className="logo">
            <a href="/"><img src={images.common.logo} alt="SHION HOUSE" /></a>
          </h1>
          <nav className={"c-gnavi " + (isToggle ? "active" : "")}>
            <div className="c-gnavi__content">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/shop">SHOP</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/blog">BLOG</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
              <ul className="icon sp">
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
                <li>
                  <span onClick={handleIsSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="c-header__right">
          <ul className="icon">
            <li className="pc">
              <Link to="/">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li className="pc">
              <Link to="/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li className="pc">
              <span onClick={handleIsSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </li>
            <li>
              <Link to="/">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="num">99</span>
              </Link>
            </li>
          </ul>
          <div className="c-user" ref={wrapperRef}>
            <span ref={refPopup} onClick={handlePopup} className="avatar">
              <img src={user.avatar ? user.avatar : images.common.user} alt="user" />
            </span>
            <ul className={popup ? "active" : ""}>
              {!isLogged ?
                <>
                  <li>
                    <Link to="/auth" onClick={() => handleBtnAuth(true)}>
                      Login<i className="fa-solid fa-lock"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth" onClick={() => handleBtnAuth(false)}>
                      Register<i className="fa-solid fa-user"></i>
                    </Link>
                  </li>
                </>
                :
                (
                  <>
                    <li>
                      <Link to="/profile">
                        Profile<i className="fa-regular fa-address-card"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/logout" onClick={handleLogout}>
                        Logout<i className="fa-solid fa-user"></i>
                      </Link>
                    </li>
                  </>
                )
              }
            </ul>
          </div>
        </div>
      </div>
      <span
        className={isToggle ? "c-toggle active" : "c-toggle"}
        onClick={() => setIsToggle(!isToggle)}
      ></span>
      <Search isSearch={isSearch} handleIsSearch={handleIsSearch} />
    </header>
  );
};

export default Header;
