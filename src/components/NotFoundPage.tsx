// pages/NotFoundPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <>
        <section className="td_page_heading td_center td_bg_filed td_heading_bg text-center td_hobble" data-src="assets/imgothers/page_heading_bg.jpg">
      <div className="container">
        <div className="td_page_heading_in">
          <h1 className="td_white_color td_fs_48 td_mb_10">Error 404</h1>
          <ol className="breadcrumb m-0 td_fs_20 td_opacity_8 td_semibold td_white_color">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Error 404</li>
          </ol>
        </div>
      </div>
      <div className="td_page_heading_shape_1 position-absolute td_hover_layer_3"></div>
      <div className="td_page_heading_shape_2 position-absolute td_hover_layer_5"></div>
      <div className="td_page_heading_shape_3 position-absolute">
        <img src="assets/imgothers/page_heading_shape_3.svg" alt=""/>
      </div>
      <div className="td_page_heading_shape_4 position-absolute">
        <img src="assets/imgothers/page_heading_shape_4.svg" alt=""/>
      </div>
      <div className="td_page_heading_shape_5 position-absolute">
        <img src="assets/imgothers/page_heading_shape_5.svg" alt=""/>
      </div>
      <div className="td_page_heading_shape_6 position-absolute td_hover_layer_3"></div>
    </section>

    <section>
      <div className="td_height_120 td_height_lg_80"></div>
      <div className="container">
        <div className="td_error text-center">
          <img src="assets/imgothers/error.svg" alt=""/>
          <div className="td_height_90 td_height_lg_40"></div>
          <h2 className="td_fs_48 td_mb_27">OOPS! Nothing Was Found</h2>
          <p className="td_mb_35">Oops! it could be you or us, there is no page here. It might have <br/>been moved or deleted.Back To Home
          </p>
          <Link to={`/`} className="td_btn td_style_1 td_radius_10 td_medium">
          
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Go Back To Home</span>
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1575 4.34302L3.84375 15.6567" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
              </svg> 
            </span>             
          </Link>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80"></div>
    </section>
    </>
      );
};

export default NotFoundPage;
