// pages/AboutPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return(
    <>
    <section>
        <div className="td_height_120 td_height_lg_75"></div>
        <div className="td_about td_style_1">
          <div className="container">
            <div className="row align-items-center td_gap_y_40">
              <div
                className="col-lg-6 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.25s"
              >
                <div className="td_about_thumb_wrap">
                  <div className="td_about_year text-uppercase td_fs_64 td_bold">
                    EST 2023
                  </div>
                  <div className="td_about_thumb_1">
                    <img src="assets/img/others/about_us04.jpg" alt="" />
                  </div>
                  <div className="td_about_thumb_2">
                    <img src="assets/img/others/about_Us_02.jpg" alt="" />
                  </div>
                  <Link
                    to={`https://www.youtube.com/embed/rRid6GCJtgc`}
                    className="td_circle_text td_center td_video_open"
                  >
                    <svg
                      width="15"
                      height="19"
                      viewBox="0 0 15 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.086 8.63792C14.6603 9.03557 14.6603 9.88459 14.086 10.2822L2.54766 18.2711C1.88444 18.7303 0.978418 18.2557 0.978418 17.449L0.978418 1.47118C0.978418 0.664496 1.88444 0.189811 2.54767 0.649016L14.086 8.63792Z"
                        fill="white"
                      />
                    </svg>
                    <img
                      src="assets/img/home_1/about_circle_text.svg"
                      alt=""
                      className=""
                    />
                  </Link>
                  <div className="td_circle_shape"></div>
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="td_section_heading td_style_1 td_mb_30">
                 
                  <h2 className="td_section_title td_fs_48 mb-0">
                    The largest & Most Diverse Universities in the United
                    Emirates
                  </h2>
                  <p className="td_section_subtitle td_fs_18 mb-0">
                    Welcome to our DevOps Foundation Course, where theory meets
                    practice to empower professionals across all domains, from
                    seasoned developers and system administrators to
                    enthusiastic freshers eager to dive into the world of
                    DevOps.
                  </p>
                </div>
                <div className="td_mb_40">
                  <ul className="td_list td_style_5 td_mp_0">
                    <li>
                      <h3 className="td_fs_24 td_mb_8">
                        Key Features of My Course
                      </h3>
                      <p className="td_fs_18 mb-0">
                        <b>Instructor-Led Sessions:</b> Learn from experienced
                        DevOps professionals who are passionate about sharing
                        their knowledge and expertise.
                      </p>
                      <br />
                      <p className="td_fs_18 mb-0">
                        <b>Hands-On Exercises:</b> Put theory into practice with
                        hands-on exercises designed to reinforce key concepts
                        and skills.
                      </p>
                      <br />
                      <p className="td_fs_18 mb-0">
                        <b>Real-World Case Studies:</b> Explore real-world
                        scenarios and learn how DevOps principles are applied in
                        different organizational contexts.
                      </p>
                      <br />
                      <p className="td_fs_18 mb-0">
                        <b>Mentorship:</b> Receive personalized guidance and
                        support from mentors who are dedicated to helping you
                        succeed.
                      </p>
                    </li>
                  </ul>
                </div>
                <Link
                  to= {`/termsandconditions`}
                  className="td_btn td_style_1 td_radius_10 td_medium"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>More About</span>
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
                      ></path>
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_75"></div>
      </section>

      <section>
        <div className="container-fluid td_plr_60 ">
          <div className="row td_gap_y_30">
            <div className="col-xxl-3 col-md-6 d-flex justify-content-center">
              <div className="td_funfact td_style_2">
                <div className="td_funfact_border"></div>
                <div className="td_funfact_icon td_center td_accent_bg">
                  <img src="assets/img/home_4/funfact_icon_1.svg" alt="" />
                </div>
                <div className="td_funfact_right td_heading_bg">
                  <h3 className="td_funfact_number mb-0 td_accent_color td_fs_36 d-flex">
                    <span className="odometer" data-count-href="01"></span>
                  </h3>
                  <p className="m-0 td_fs_16 td_accent_color td_medium">
                    Trainer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 d-flex justify-content-center">
              <div className="td_funfact td_style_2">
                <div className="td_funfact_border"></div>
                <div className="td_funfact_icon td_center td_accent_bg">
                  <img src="assets/img/home_4/funfact_icon_2.svg" alt="" />
                </div>
                <div className="td_funfact_right td_heading_bg">
                  <h3 className="td_funfact_number mb-0 td_accent_color td_fs_36 d-flex">
                    <span className="odometer" data-count-href="100"></span>+
                  </h3>
                  <p className="m-0 td_fs_16 td_accent_color td_medium">
                    Students{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 d-flex justify-content-center">
              <div className="td_funfact td_style_2">
                <div className="td_funfact_border"></div>
                <div className="td_funfact_icon td_center td_accent_bg">
                  <img src="assets/img/home_4/funfact_icon_3.svg" alt="" />
                </div>
                <div className="td_funfact_right td_heading_bg">
                  <h3 className="td_funfact_number mb-0 td_accent_color td_fs_36 d-flex">
                    <span className="odometer" data-count-href="08"></span>+
                  </h3>
                  <p className="m-0 td_fs_16 td_accent_color td_medium">
                    Events
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 d-flex justify-content-center">
              <div className="td_funfact td_style_2">
                <div className="td_funfact_border"></div>
                <div className="td_funfact_icon td_center td_accent_bg">
                  <img src="assets/img/home_4/funfact_icon_4.svg" alt="" />
                </div>
                <div className="td_funfact_right td_heading_bg">
                  <h3 className="td_funfact_number mb-0 td_accent_color td_fs_36 d-flex">
                    <span className="odometer" data-count-href="02"></span>
                  </h3>
                  <p className="m-0 td_fs_16 td_accent_color td_medium">
                    Courses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="td_shape_section_7 td_hobble">
        <div className="td_shape_position_1 position-absolute td_hover_layer_3">
          <img src="assets/img/home_2/testimonial_shape_1.svg" alt="" />
        </div>
        <div className="td_shape_position_2 position-absolute td_hover_layer_5">
          <img src="assets/img/home_2/testimonial_shape_2.svg" alt="" />
        </div>
        <div className="td_shape_position_3 position-absolute td_hover_layer_3">
          <img src="assets/img/home_2/testimonial_shape_3.svg" alt="" />
        </div>
        <div className="td_shape_position_4 position-absolute td_hover_layer_5">
          <img src="assets/img/home_2/testimonial_shape_4.svg" alt="" />
        </div>
        <div className="td_height_112 td_height_lg_75"></div>
        <div className="container">
          <div
            className="td_section_heading td_style_1 text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
              <i></i>
              Testimonials
              <i></i>
            </p>
            <h2 className="td_section_title td_fs_48 mb-0">
              What are they saying{" "}
            </h2>
          </div>
          <div className="td_height_50 td_height_lg_50"></div>
          <div
            className="td_slider td_style_1 td_slider_gap_24 td_remove_overflow wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div
              className="td_slider_container"
              data-autoplay="0"
              data-loop="1"
              data-speed="800"
              data-center="0"
              data-variable-width="0"
              data-slides-per-view="responsive"
              data-xs-slides="1"
              data-sm-slides="2"
              data-md-slides="2"
              data-lg-slides="2"
              data-add-slides="2"
            >
              <div className="td_slider_wrapper">
                <div className="td_slide">
                  <div className="td_testimonial td_style_1 td_type_1 td_white_bg td_radius_5">
                    <span className="td_quote_icon td_accent_color">
                      <svg
                        width="65"
                        height="46"
                        viewBox="0 0 65 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.05"
                          d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    <div className="td_testimonial_meta td_mb_24">
                      <img src="assets/img/others/LiasaWen.jpg" alt="" />
                      <div className="td_testimonial_meta_right">
                        <h3 className="td_fs_24 td_semibold td_mb_2">
                          Lisa van der Berg
                        </h3>
                      </div>
                    </div>
                    <blockquote className="td_testimonial_text td_fs_20 td_medium td_heading_color td_mb_24 td_opacity_9">
                      I thoroughly enjoyed the DevOps Foundation course. It
                      provided a solid foundation in DevOps principles and
                      methodologies. The interactive sessions and real-world
                      case studies helped me understand the practical
                      applications of DevOps in various organizational contexts.
                      I would recommend this course to anyone looking to stay
                      ahead in the dynamic world of technology
                    </blockquote>
                    <div className="td_rating" data-rating="4.5">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <div className="td_rating_percentage">
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_testimonial td_style_1 td_type_1 td_white_bg td_radius_5">
                    <span className="td_quote_icon td_accent_color">
                      <svg
                        width="65"
                        height="46"
                        viewBox="0 0 65 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.05"
                          d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    <div className="td_testimonial_meta td_mb_24">
                      <img src="assets/img/others/MeiLeiTid.jpg" alt="" />
                      <div className="td_testimonial_meta_right">
                        <h3 className="td_fs_24 td_semibold td_mb_2">
                          Mei Lin Tan
                        </h3>
                      </div>
                    </div>
                    <blockquote className="td_testimonial_text td_fs_20 td_medium td_heading_color td_mb_24 td_opacity_9">
                      As a professional in the tech industry, I found the DevOps
                      Foundation course to be invaluable. It offered practical
                      insights into implementing DevOps methodologies in
                      real-world scenarios. The instructors were knowledgeable
                      and provided excellent support throughout the course. I'm
                      grateful for the skills I gained, which have significantly
                      boosted my career prospects
                    </blockquote>
                    <div className="td_rating" data-rating="4.5">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <div className="td_rating_percentage">
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_testimonial td_style_1 td_type_1 td_white_bg td_radius_5">
                    <span className="td_quote_icon td_accent_color">
                      <svg
                        width="65"
                        height="46"
                        viewBox="0 0 65 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.05"
                          d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    <div className="td_testimonial_meta td_mb_24">
                      <img src="assets/img/others/RahulGupta.jpg" alt="" />
                      <div className="td_testimonial_meta_right">
                        <h3 className="td_fs_24 td_semibold td_mb_2">
                          Rahul Gupta
                        </h3>
                      </div>
                    </div>
                    <blockquote className="td_testimonial_text td_fs_20 td_medium td_heading_color td_mb_24 td_opacity_9">
                    <i className="bi bi-quote"></i>
                     " Taking the DevOps Foundation course was a game-changer for
                      me. It provided a comprehensive understanding of DevOps
                      principles and practices. The course structure was
                      well-designed, and the hands-on exercises were extremely
                      beneficial. I highly recommend this course to anyone
                      looking to enhance their DevOps skills "
                    </blockquote>
                    <div className="td_rating" data-rating="4.5">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <div className="td_rating_percentage">
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                        <i className="fa-solid fa-star fa-fw"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="td_height_50 td_height_lg_40"></div>
            <div className="td_pagination td_style_1"></div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80"></div>
      </section>
    </>
  )
};

export default AboutPage;
