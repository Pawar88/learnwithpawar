import React from "react";
import { Link } from "react-router-dom";
interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "NotFoundPage", path: "/notfoundpage" },
];
const Navbar = () => {
  return (
    <nav className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
      <div className="td_top_header td_heading_bg td_white_color">
        <div className="container">
          <div className="td_top_header_in">
            <div className="td_top_header_left td_moving_box_wrap">
              <ul className="td_header_contact_list td_mp_0 td_normal  td_moving_box">
                <li>
                  <img src="/assets/img/icons/call.svg" alt="" />
                  <span>
                    Call:{" "}
                    <Link to={`cal:+91 842 121 8824`}>+91 842 121 8824</Link>
                  </span>
                </li>
                <li>
                  <img src="/assets/img/icons/envlop.svg" alt="" />
                  <span>
                    Email:{" "}
                    <Link to={`mailto:learningwithprayag@gmail.com`}>
                      learningwithprayag@gmail.com
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="td_top_header_right">
              <span>
                <Link to={`/`} className="">
                  Login
                </Link>
                /
                <Link to={`/`} className="">
                  Register
                </Link>
              </span>
              <Link
                to={`/coursesdetails`}
                className="td_btn td_style_1 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Enroll Now</span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1575 4.34302L3.84375 15.6567"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="td_main_header">
        <div className="container">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <a className="td_site_branding" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="142"
                  height="75"
                  viewBox="0 0 200 200"
                >
                  <circle cx="100" cy="100" r="90" fill="#0073e6" />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="50"
                    fontFamily="Arial, sans-serif"
                    dy=".3em"
                  >
                    LWP
                  </text>
                </svg>
              </a>
              <div className="td_header_category_wrap position-relative">
                <button className="td_header_dropdown_btn td_medium td_heading_color">
                  <img
                    src="/assets/img/icons/menu-square.svg"
                    alt=""
                    className="td_header_dropdown_btn_icon"
                  />
                  <span>All Category</span>
                  <span className="td_header_dropdown_btn_tobble_icon td_center">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 4.99997C9 4.99997 6.05404 1.00001 4.99997 1C3.94589 0.999991 1 5 1 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <ul className="td_header_dropdown_list td_mp_0">
                  <li>
                    <a href="/courselist">AWS DevOPs</a>
                  </li>
                  <li>
                    <a href="/courselist">DevSecOps</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="td_main_header_right">
              <nav className="td_nav">
                <div className="td_nav_list_wrap">
                  <div className="td_nav_list_wrap_in">
                    <ul className="td_nav_list">
                      {routes.map((route) => (
                        <li key={route.path}>
                          <Link to={route.path}>{route.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="td_hero_icon_btns position-relative">
                <div className="position-relative">
                  <button
                    className="td_circle_btn td_center td_search_tobble_btn"
                    type="button"
                  >
                    <img src="/assets/img/icons/search_2.svg" alt="" />
                  </button>
                  <div className="td_header_search_wrap">
                    <form action="#" className="td_header_search">
                      <input
                        type="text"
                        className="td_header_search_input"
                        placeholder="Search For Anything"
                      />
                      <button className="td_header_search_btn td_center">
                        <img src="/assets/img/icons/search_2.svg" alt="" />
                      </button>
                    </form>
                  </div>
                </div>
                <button
                  className="td_circle_btn td_center td_wishlist_btn"
                  type="button"
                >
                  <img src="/assets/img/icons/love.svg" alt="" />
                  <span className="td_circle_btn_label">0</span>
                </button>
                <button className="td_circle_btn td_center" type="button">
                  <img src="/assets/img/icons/cart.svg" alt="" />
                  <span className="td_circle_btn_label">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
