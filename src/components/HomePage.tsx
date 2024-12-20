// pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { StartedCourseDetail } from "./StartedCourseDetail";
const startedCourseTimeingData  ={
  scheduleDate:"December 2nd, 2024",// dateFormat("2024-12-02T08:59:00.000Z", "mmmm dS, yyyy"),
  scheduleTime: "07.00 am - 09.00 am",
  durationPeriod: "2+ Months"
}
const Home: React.FC = () => {
  return (
    <>
      <section className="td_hero td_style_5 td_center td_hobble">
        <div className="container">
          <div
            className="td_hero_text wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <p className="td_hero_subtitle_up td_fs_18 text-uppercase td_spacing_1 td_medium td_mb_20">
              Knowledge is power
            </p>
            <h1 className="td_hero_title td_fs_52 td_mb_30">
              Elevate your DevOps skills!
            </h1>
            <p className="td_hero_subtitle td_fs_18 td_heading_color td_opacity_8 td_mb_40">
              Turbocharge your career in the world of DevOps!
            </p>
            <div className="td_newsletter td_style_1">
              <form action="#" className="td_newsletter_form">
                <Link
                  to="/courses"
                  className="td_btn td_style_1 td_radius_30 td_medium td_with_shadow"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Start Learning Now</span>
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
              </form>
            </div>
          </div>
        </div>
        <div
          className="td_hero_img_wrap wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="td_hero_img">
            <img
              src="https://media.istockphoto.com/id/1394216808/photo/agile-programming-and-devops-concept-engineer-working-on-laptop-with-virtual-screen-it.jpg?s=612x612&w=0&k=20&c=xk6fvbkUdxu2AK2Lhjf_UceNlFvMfw5lU9HRKEtmVbE="
              alt=""
            />
          </div>
          <div className="td_hero_img_1 position-absolute td_hover_layer_3">
            <img
              src="https://img.freepik.com/free-vector/flat-design-devops-illustration_52683-84086.jpg?w=360"
              alt=""
            />
          </div>
          <div className="td_hero_img_2 position-absolute td_hover_layer_3">
            <img
              src="https://img.freepik.com/premium-vector/devops-concept-with-people-scene-flat-cartoon-design-woman-coding-creates-programs-while-working-company-with-practice-development-operations-vector-illustration-visual-story-web_9209-9319.jpg?semt=ais_hybrid"
              alt=""
            />
          </div>
          <div className="td_hero_img_3 position-absolute td_hover_layer_5">
            <img
              src="https://digitalcloud.training/wp-content/uploads/2024/02/FREE-AWS-Training-Resources-DCT-768x768.png"
              alt=""
            />
          </div>
          <div className="td_avatars_wrap td_type_1 td_hover_layer_5">
            <div className="td_avatars">
              <div>
                <img src="assets/img/others/testimonials-4.jpg" alt="" />
              </div>
              <div>
                <img src="assets/img/others/testimonials-3.jpg" alt="" />
              </div>
              <div>
                <img src="assets/img/others/testimonials_1.jpg" alt="" />
              </div>
              <div>
                <img src="assets/img/avatar_3.png" alt="" />
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div>
              <p className="mb-0 td_fs_14 td_semibold td_heading_color">
                100+ Students
              </p>
              <p className="mb-0 td_fs_12 td_opacity_6">
                Join Our Online Class
              </p>
            </div>
          </div>
          <div className="td_hero_funfact td_hover_layer_5">
            <img src="assets/img/icons/user_2.svg" alt="" />
            <div>
              <p className="td_fs_40 td_bold td_heading_color">100+</p>
              <p className="td_mb_5 td_heading_color td_opacity_5 td_fs_12">
                Active Students
              </p>
            </div>
          </div>
          <div className="td_hero_shape_1 td_accent_color position-absolute">
            <svg
              width="602"
              height="602"
              viewBox="0 0 602 602"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M161.753 36.4035C207.321 12.4228 258.31 0.61671 309.781 2.12897C361.252 3.64123 411.46 18.4206 455.542 45.0353C499.623 71.6501 536.084 109.198 561.393 154.042C586.702 198.887 600 249.507 600 301"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="20 20"
              />
              <path
                d="M67.4657 487.715C42.427 456.397 23.9433 420.362 13.1142 381.755C2.2851 343.148 -0.66817 302.758 4.43008 262.986C9.52834 223.215 22.574 184.875 42.7908 150.248C63.0077 115.62 89.9828 85.4132 122.111 61.4231"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="20 20"
              />
              <path
                d="M599.556 317.316C596.535 372.583 578.232 425.927 546.686 471.407C515.14 516.888 471.588 552.719 420.882 574.911C370.175 597.102 314.304 604.784 259.49 597.099C204.676 589.415 153.071 566.666 110.422 531.386"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="20 20"
              />
            </svg>
          </div>
        </div>
        <div className="td_hero_shape_2 position-absolute td_hover_layer_3"></div>
        <div className="td_hero_shape_3 position-absolute td_hover_layer_5"></div>
        <div className="td_hero_shape_4 position-absolute td_hover_layer_3"></div>
        <div className="td_hero_shape_5 position-absolute td_hover_layer_5">
          <img src="assets/img/home_5/hero_shape_5.svg" alt="" />
        </div>
      </section>

      <section
        className="td_accent_bg td_rate_section wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <div className="td_rate_heading td_fs_20 td_semibold td_white_color">
          Our Learners work at
          <div className="td_rating_wrap">
            <div className="td_rating" data-rating="5">
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

        <div className="td_moving_box_wrap">
          <div className="td_moving_box_in">
            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img
                      src="assets/img/home_2/tataconsultancyservice.svg"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/Amazon.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/Flipkart.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/oracle.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/Deloitte.svg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/Infosys.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/netflix_logo.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/ibm-logo.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/Wipro.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src="assets/img/home_2/HCL.svg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="td_height_112 td_height_lg_75"></div>
        <div className="container">
          <div
            className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading_left">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                <i></i>
                Browse Categories
                <i></i>
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
                Explore Online Courses
              </h2>
            </div>
            <div className="td_section_heading_right">
              <p className="td_section_subtitle td_fs_18 td_mb_16 td_heading_color td_opacity_9">
                Explore Link diverse range of courses including{" "}
                <b>DevOps, AWS Cloud, AWS DevOps, DevSecOps, Helm, Istio</b> and
                more. Master cutting-edge technologies and methodologies
                essential for modern IT environments. Gain hands-on experience
                and valuable insights to advance your career in tech. Enroll now
                and stay ahead in today's dynamic industry landscape.
              </p>
              <Link
                to="/courselist"
                className="td_btn td_style_2 td_heading_color td_medium td_mb_10"
              >
                See all Courses
                <i>
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
                </i>
              </Link>
            </div>
          </div>
          <div className="td_height_50 td_height_lg_50"></div>
          <div className="row td_gap_y_24">
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img
                        src="assets/img/home_2/linux-svgrepo-com.svg"
                        alt=""
                      />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Linux
                    </h3>
                  </div>
                </div>
               
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/SH.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Shell Scirpting
                    </h3>
                  </div>
                </div>
               
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/github.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Git
                    </h3>
                  </div>
                </div>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/githubIcon.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Github
                    </h3>
                  </div>
                </div>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/Gitlab.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      GitLab
                    </h3>
                  </div>
                </div>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/docker.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Docker
                    </h3>
                  </div>
                </div>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/dockerhub.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      DockerHub
                    </h3>
                  </div>
                </div>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.45s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/category_icon_8.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Nexus Repostitory
                    </h3>
                  </div>
                </div>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/kubernetes.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Kubernetes
                    </h3>
                  </div>
                </div>
               
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/ansible.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Ansible
                    </h3>
                  </div>
                </div>
               
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/terraform.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Terraform
                    </h3>
                  </div>
                </div>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.45s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_hover_layer_3">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src="assets/img/home_2/projectIco.svg" alt="" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
                      Project
                    </h3>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="td_height_112 td_height_lg_75"></div>
        <div className="container">
          <div className="row td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_image_box td_style_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.25s"
                >
                  <img src="assets/img/home_2/online-course-learning-at-home.png" alt="" />
                </div>
                <div
                  className="td_image_box_img_2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.25s"
                >
                  <img
                    src="assets/img/others/about_Us_02.jpg"
                    alt=""
                    className="td_image_box_img_2_thumb"
                  />
                  <svg
                    className="td_image_box_img_2_icon td_accent_color"
                    width="130"
                    height="40"
                    viewBox="0 0 130 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_2352_1372"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="130"
                      height="40"
                    >
                      <path
                        d="M110 0H20C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40H110C121.046 40 130 31.0457 130 20C130 8.9543 121.046 0 110 0Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_2352_1372)">
                      <path
                        d="M110 0H20C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40H110C121.046 40 130 31.0457 130 20C130 8.9543 121.046 0 110 0Z"
                        fill="white"
                      />
                      <path
                        d="M96.4453 16.311V21.916C96.4453 23.508 97.7353 24.798 99.3273 24.798H107.695C108.287 24.798 108.774 24.311 108.774 23.719V18.1C108.774 16.508 107.485 15.219 105.893 15.219H97.5243C96.9323 15.219 96.4453 15.692 96.4453 16.271V16.311Z"
                        fill="#00001B"
                      />
                      <path
                        d="M109.732 22.545L112.048 24.572C112.417 24.9 112.995 24.861 113.324 24.493C113.469 24.322 113.548 24.111 113.548 23.9V16.111C113.548 15.611 113.14 15.216 112.653 15.203C112.43 15.203 112.219 15.282 112.061 15.427L109.732 17.466C109.535 17.637 109.43 17.887 109.43 18.15V21.874C109.43 22.124 109.548 22.374 109.732 22.545Z"
                        fill="#00001B"
                      />
                      <mask
                        id="mask1_2352_1372"
                        mask-type="luminance"
                        maskUnits="userSpaceOnUse"
                        x="50"
                        y="5"
                        width="30"
                        height="30"
                      >
                        <path d="M80 5H50V35H80V5Z" fill="white" />
                      </mask>
                      <g mask="url(#mask1_2352_1372)">
                        <path
                          d="M65 35C73.284 35 80 28.284 80 20C80 11.716 73.284 5 65 5C56.716 5 50 11.716 50 20C50 28.284 56.716 35 65 35Z"
                          fill="currentColor"
                        />
                        <path
                          d="M70.333 22.205C69.183 22.205 68.085 21.955 67.073 21.46C66.915 21.384 66.731 21.372 66.563 21.429C66.395 21.488 66.257 21.611 66.18 21.769L65.7 22.763C64.26 21.936 63.065 20.74 62.237 19.3L63.232 18.82C63.392 18.743 63.513 18.605 63.572 18.437C63.629 18.269 63.619 18.085 63.541 17.927C63.045 16.916 62.795 15.819 62.795 14.667C62.795 14.299 62.496 14 62.128 14H59.667C59.299 14 59 14.299 59 14.667C59 20.916 64.084 26 70.333 26C70.701 26 71 25.701 71 25.333V22.872C71 22.504 70.701 22.205 70.333 22.205Z"
                          fill="#FAFAFA"
                        />
                      </g>
                      <mask
                        id="mask2_2352_1372"
                        mask-type="luminance"
                        maskUnits="userSpaceOnUse"
                        x="15"
                        y="10"
                        width="20"
                        height="20"
                      >
                        <path d="M35 10H15V30H35V10Z" fill="white" />
                      </mask>
                      <g mask="url(#mask2_2352_1372)">
                        <path
                          d="M30.3647 21.173C30.3647 20.849 30.1017 20.586 29.7777 20.586C29.4527 20.586 29.1897 20.849 29.1897 21.173C29.1897 23.44 27.2667 25.284 25.0007 25.284C22.7337 25.284 20.8107 23.44 20.8107 21.173C20.8107 20.849 20.5487 20.586 20.2237 20.586C19.8987 20.586 19.6367 20.849 19.6367 21.173C19.6367 23.887 21.7777 26.103 24.4127 26.4V27.634H22.5727C22.2487 27.634 21.9857 27.896 21.9857 28.221C21.9857 28.546 22.2487 28.808 22.5727 28.808H27.4277C27.7527 28.808 28.0157 28.546 28.0157 28.221C28.0157 27.896 27.7527 27.634 27.4277 27.634H25.5877V26.4C28.2237 26.103 30.3647 23.887 30.3647 21.173Z"
                          fill="#00001B"
                        />
                        <path
                          d="M24.9994 11.188C23.3804 11.188 21.9844 12.505 21.9844 14.124V21.172C21.9844 22.791 23.3804 24.108 24.9994 24.108C26.6184 24.108 28.0144 22.791 28.0144 21.172V14.124C28.0144 12.505 26.6184 11.188 24.9994 11.188Z"
                          fill="#00001B"
                        />
                        <path
                          d="M33.108 12.078C32.879 11.849 32.507 11.849 32.278 12.078C32.048 12.308 32.048 12.679 32.278 12.909C33.276 13.907 33.826 15.234 33.826 16.646C33.826 18.058 33.276 19.386 32.278 20.384C32.048 20.613 32.048 20.985 32.278 21.214C32.507 21.444 32.879 21.444 33.108 21.214C34.329 19.994 35.001 18.372 35.001 16.646C35.001 14.92 34.329 13.298 33.108 12.078Z"
                          fill="#00001B"
                        />
                        <path
                          d="M31.4481 13.742C31.2181 13.513 30.8471 13.513 30.6171 13.742C30.3881 13.972 30.3881 14.344 30.6171 14.573C31.1731 15.128 31.4791 15.865 31.4791 16.648C31.4791 17.431 31.1731 18.168 30.6171 18.724C30.3881 18.953 30.3881 19.325 30.6171 19.554C30.8471 19.784 31.2181 19.784 31.4481 19.554C32.2261 18.777 32.6531 17.745 32.6531 16.648C32.6531 15.551 32.2251 14.519 31.4481 13.742Z"
                          fill="#00001B"
                        />
                        <path
                          d="M29.784 15.406C29.554 15.177 29.183 15.177 28.953 15.406C28.724 15.636 28.724 16.008 28.953 16.237C29.065 16.348 29.126 16.496 29.126 16.652C29.126 16.808 29.065 16.956 28.953 17.067C28.724 17.296 28.724 17.668 28.953 17.897C29.183 18.127 29.554 18.127 29.784 17.897C30.117 17.564 30.301 17.122 30.301 16.652C30.301 16.182 30.117 15.74 29.784 15.406Z"
                          fill="#00001B"
                        />
                        <path
                          d="M16.175 16.646C16.175 15.234 16.725 13.907 17.723 12.909C17.953 12.679 17.953 12.308 17.723 12.078C17.494 11.849 17.122 11.849 16.893 12.078C15.672 13.298 15 14.92 15 16.646C15 18.372 15.672 19.994 16.893 21.214C17.122 21.444 17.494 21.444 17.723 21.214C17.953 20.985 17.953 20.613 17.723 20.384C16.725 19.386 16.175 18.058 16.175 16.646Z"
                          fill="#00001B"
                        />
                        <path
                          d="M18.5256 16.648C18.5256 15.865 18.8316 15.128 19.3876 14.573C19.6166 14.344 19.6166 13.972 19.3876 13.742C19.1576 13.513 18.7866 13.513 18.5566 13.742C17.7796 14.519 17.3516 15.551 17.3516 16.648C17.3516 17.745 17.7786 18.777 18.5566 19.554C18.7866 19.783 19.1576 19.783 19.3876 19.554C19.6166 19.325 19.6166 18.953 19.3876 18.724C18.8316 18.168 18.5256 17.431 18.5256 16.648Z"
                          fill="#00001B"
                        />
                        <path
                          d="M20.8742 16.652C20.8742 16.496 20.9352 16.348 21.0462 16.237C21.2762 16.008 21.2762 15.636 21.0462 15.406C20.8172 15.177 20.4452 15.177 20.2162 15.406C19.8832 15.74 19.6992 16.182 19.6992 16.652C19.6992 17.122 19.8832 17.564 20.2162 17.897C20.4452 18.127 20.8172 18.127 21.0462 17.897C21.2762 17.668 21.2762 17.296 21.0462 17.067C20.9352 16.956 20.8742 16.808 20.8742 16.652Z"
                          fill="#00001B"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className="td_award_box wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.25s"
                >
                  <div className="td_award_box_icon td_center">
                    <img src="assets/img/home_2/cs_award_box_icon.svg" alt="" />
                  </div>
                  <div className="td_award_box_in">
                    <p className="td_fs_24 td_semibold td_white_color td_center td_accent_bg">
                      100+
                    </p>
                    <h3 className="td_fs_14 td_semibold mb-0">
                      100 plus Students
                    </h3>
                  </div>
                </div>
                <div className="td_image_box_shape_1"></div>
                <div className="td_image_box_shape_2">
                  <Link
                    to="/"
                    className="td_player_btn_wrap td_video_open td_medium td_heading_color"
                  >
                    <span className="td_player_btn td_center">
                      <span></span>
                    </span>
                  </Link>
                </div>
                <div className="td_image_box_shape_3 td_accent_color">
                  <svg
                    width="163"
                    height="142"
                    viewBox="0 0 163 142"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.0913 6.37861C36.8532 6.37861 38.2815 4.95071 38.2815 3.1893C38.2815 1.4279 36.8532 0 35.0913 0C33.3295 0 31.9012 1.4279 31.9012 3.1893C31.9012 4.95071 33.3295 6.37861 35.0913 6.37861Z"
                      fill="currentColor"
                    />
                    <path
                      d="M35.0913 33.5636C36.8532 33.5636 38.2815 32.1357 38.2815 30.3743C38.2815 28.6129 36.8532 27.185 35.0913 27.185C33.3295 27.185 31.9012 28.6129 31.9012 30.3743C31.9012 32.1357 33.3295 33.5636 35.0913 33.5636Z"
                      fill="currentColor"
                    />
                    <path
                      d="M35.0913 60.9005C36.8532 60.9005 38.2815 59.4726 38.2815 57.7112C38.2815 55.9498 36.8532 54.5219 35.0913 54.5219C33.3295 54.5219 31.9012 55.9498 31.9012 57.7112C31.9012 59.4726 33.3295 60.9005 35.0913 60.9005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M35.0913 88.2374C36.8532 88.2374 38.2815 86.8095 38.2815 85.0481C38.2815 83.2867 36.8532 81.8588 35.0913 81.8588C33.3295 81.8588 31.9012 83.2867 31.9012 85.0481C31.9012 86.8095 33.3295 88.2374 35.0913 88.2374Z"
                      fill="currentColor"
                    />
                    <path
                      d="M35.0913 114.663C36.8532 114.663 38.2815 113.235 38.2815 111.474C38.2815 109.712 36.8532 108.284 35.0913 108.284C33.3295 108.284 31.9012 109.712 31.9012 111.474C31.9012 113.235 33.3295 114.663 35.0913 114.663Z"
                      fill="currentColor"
                    />
                    <path
                      d="M35.0913 142C36.8532 142 38.2815 140.572 38.2815 138.811C38.2815 137.049 36.8532 135.621 35.0913 135.621C33.3295 135.621 31.9012 137.049 31.9012 138.811C31.9012 140.572 33.3295 142 35.0913 142Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.19012 6.37861C4.95198 6.37861 6.38024 4.95071 6.38024 3.1893C6.38024 1.4279 4.95198 0 3.19012 0C1.42827 0 0 1.4279 0 3.1893C0 4.95071 1.42827 6.37861 3.19012 6.37861Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.19012 33.5636C4.95198 33.5636 6.38024 32.1357 6.38024 30.3743C6.38024 28.6129 4.95198 27.185 3.19012 27.185C1.42827 27.185 0 28.6129 0 30.3743C0 32.1357 1.42827 33.5636 3.19012 33.5636Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.19012 60.9005C4.95198 60.9005 6.38024 59.4726 6.38024 57.7112C6.38024 55.9498 4.95198 54.5219 3.19012 54.5219C1.42827 54.5219 0 55.9498 0 57.7112C0 59.4726 1.42827 60.9005 3.19012 60.9005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.19012 88.2374C4.95198 88.2374 6.38024 86.8095 6.38024 85.0481C6.38024 83.2867 4.95198 81.8588 3.19012 81.8588C1.42827 81.8588 0 83.2867 0 85.0481C0 86.8095 1.42827 88.2374 3.19012 88.2374Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.19012 114.663C4.95198 114.663 6.38024 113.235 6.38024 111.474C6.38024 109.712 4.95198 108.284 3.19012 108.284C1.42827 108.284 0 109.712 0 111.474C0 113.235 1.42827 114.663 3.19012 114.663Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.19012 142C4.95198 142 6.38024 140.572 6.38024 138.811C6.38024 137.049 4.95198 135.621 3.19012 135.621C1.42827 135.621 0 137.049 0 138.811C0 140.572 1.42827 142 3.19012 142Z"
                      fill="currentColor"
                    />
                    <path
                      d="M97.3746 6.37861C99.1365 6.37861 100.565 4.95071 100.565 3.1893C100.565 1.4279 99.1365 0 97.3746 0C95.6128 0 94.1845 1.4279 94.1845 3.1893C94.1845 4.95071 95.6128 6.37861 97.3746 6.37861Z"
                      fill="currentColor"
                    />
                    <path
                      d="M97.3746 33.5636C99.1365 33.5636 100.565 32.1357 100.565 30.3743C100.565 28.6129 99.1365 27.185 97.3746 27.185C95.6128 27.185 94.1845 28.6129 94.1845 30.3743C94.1845 32.1357 95.6128 33.5636 97.3746 33.5636Z"
                      fill="currentColor"
                    />
                    <path
                      d="M97.3746 60.9005C99.1365 60.9005 100.565 59.4726 100.565 57.7112C100.565 55.9498 99.1365 54.5219 97.3746 54.5219C95.6128 54.5219 94.1845 55.9498 94.1845 57.7112C94.1845 59.4726 95.6128 60.9005 97.3746 60.9005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M97.3746 88.2374C99.1365 88.2374 100.565 86.8095 100.565 85.0481C100.565 83.2867 99.1365 81.8588 97.3746 81.8588C95.6128 81.8588 94.1845 83.2867 94.1845 85.0481C94.1845 86.8095 95.6128 88.2374 97.3746 88.2374Z"
                      fill="currentColor"
                    />
                    <path
                      d="M97.3746 114.663C99.1365 114.663 100.565 113.235 100.565 111.474C100.565 109.712 99.1365 108.284 97.3746 108.284C95.6128 108.284 94.1845 109.712 94.1845 111.474C94.1845 113.235 95.6128 114.663 97.3746 114.663Z"
                      fill="currentColor"
                    />
                    <path
                      d="M97.3746 142C99.1365 142 100.565 140.572 100.565 138.811C100.565 137.049 99.1365 135.621 97.3746 135.621C95.6128 135.621 94.1845 137.049 94.1845 138.811C94.1845 140.572 95.6128 142 97.3746 142Z"
                      fill="currentColor"
                    />
                    <path
                      d="M65.4734 6.37861C67.2353 6.37861 68.6636 4.95071 68.6636 3.1893C68.6636 1.4279 67.2353 0 65.4734 0C63.7116 0 62.2833 1.4279 62.2833 3.1893C62.2833 4.95071 63.7116 6.37861 65.4734 6.37861Z"
                      fill="currentColor"
                    />
                    <path
                      d="M65.4734 33.5636C67.2353 33.5636 68.6636 32.1357 68.6636 30.3743C68.6636 28.6129 67.2353 27.185 65.4734 27.185C63.7116 27.185 62.2833 28.6129 62.2833 30.3743C62.2833 32.1357 63.7116 33.5636 65.4734 33.5636Z"
                      fill="currentColor"
                    />
                    <path
                      d="M65.4734 60.9005C67.2353 60.9005 68.6636 59.4726 68.6636 57.7112C68.6636 55.9498 67.2353 54.5219 65.4734 54.5219C63.7116 54.5219 62.2833 55.9498 62.2833 57.7112C62.2833 59.4726 63.7116 60.9005 65.4734 60.9005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M65.4734 88.2374C67.2353 88.2374 68.6636 86.8095 68.6636 85.0481C68.6636 83.2867 67.2353 81.8588 65.4734 81.8588C63.7116 81.8588 62.2833 83.2867 62.2833 85.0481C62.2833 86.8095 63.7116 88.2374 65.4734 88.2374Z"
                      fill="currentColor"
                    />
                    <path
                      d="M65.4734 114.663C67.2353 114.663 68.6636 113.235 68.6636 111.474C68.6636 109.712 67.2353 108.284 65.4734 108.284C63.7116 108.284 62.2833 109.712 62.2833 111.474C62.2833 113.235 63.7116 114.663 65.4734 114.663Z"
                      fill="currentColor"
                    />
                    <path
                      d="M65.4734 142C67.2353 142 68.6636 140.572 68.6636 138.811C68.6636 137.049 67.2353 135.621 65.4734 135.621C63.7116 135.621 62.2833 137.049 62.2833 138.811C62.2833 140.572 63.7116 142 65.4734 142Z"
                      fill="currentColor"
                    />
                    <path
                      d="M159.81 6.37861C161.572 6.37861 163 4.95071 163 3.1893C163 1.4279 161.572 0 159.81 0C158.048 0 156.62 1.4279 156.62 3.1893C156.62 4.95071 158.048 6.37861 159.81 6.37861Z"
                      fill="currentColor"
                    />
                    <path
                      d="M159.81 33.5636C161.572 33.5636 163 32.1357 163 30.3743C163 28.6129 161.572 27.185 159.81 27.185C158.048 27.185 156.62 28.6129 156.62 30.3743C156.62 32.1357 158.048 33.5636 159.81 33.5636Z"
                      fill="currentColor"
                    />
                    <path
                      d="M159.81 60.9005C161.572 60.9005 163 59.4726 163 57.7112C163 55.9498 161.572 54.5219 159.81 54.5219C158.048 54.5219 156.62 55.9498 156.62 57.7112C156.62 59.4726 158.048 60.9005 159.81 60.9005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M159.81 88.2374C161.572 88.2374 163 86.8095 163 85.0481C163 83.2867 161.572 81.8588 159.81 81.8588C158.048 81.8588 156.62 83.2867 156.62 85.0481C156.62 86.8095 158.048 88.2374 159.81 88.2374Z"
                      fill="currentColor"
                    />
                    <path
                      d="M159.81 114.663C161.572 114.663 163 113.235 163 111.474C163 109.712 161.572 108.284 159.81 108.284C158.048 108.284 156.62 109.712 156.62 111.474C156.62 113.235 158.048 114.663 159.81 114.663Z"
                      fill="currentColor"
                    />
                    <path
                      d="M159.81 142C161.572 142 163 140.572 163 138.811C163 137.049 161.572 135.621 159.81 135.621C158.048 135.621 156.62 137.049 156.62 138.811C156.62 140.572 158.048 142 159.81 142Z"
                      fill="currentColor"
                    />
                    <path
                      d="M127.909 6.37861C129.671 6.37861 131.099 4.95071 131.099 3.1893C131.099 1.4279 129.671 0 127.909 0C126.147 0 124.719 1.4279 124.719 3.1893C124.719 4.95071 126.147 6.37861 127.909 6.37861Z"
                      fill="currentColor"
                    />
                    <path
                      d="M127.909 33.5636C129.671 33.5636 131.099 32.1357 131.099 30.3743C131.099 28.6129 129.671 27.185 127.909 27.185C126.147 27.185 124.719 28.6129 124.719 30.3743C124.719 32.1357 126.147 33.5636 127.909 33.5636Z"
                      fill="currentColor"
                    />
                    <path
                      d="M127.909 60.9005C129.671 60.9005 131.099 59.4726 131.099 57.7112C131.099 55.9498 129.671 54.5219 127.909 54.5219C126.147 54.5219 124.719 55.9498 124.719 57.7112C124.719 59.4726 126.147 60.9005 127.909 60.9005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M127.909 88.2374C129.671 88.2374 131.099 86.8095 131.099 85.0481C131.099 83.2867 129.671 81.8588 127.909 81.8588C126.147 81.8588 124.719 83.2867 124.719 85.0481C124.719 86.8095 126.147 88.2374 127.909 88.2374Z"
                      fill="currentColor"
                    />
                    <path
                      d="M127.909 114.663C129.671 114.663 131.099 113.235 1Latest courses31.099 111.474C131.099 109.712 129.671 108.284 127.909 108.284C126.147 108.284 124.719 109.712 124.719 111.474C124.719 113.235 126.147 114.663 127.909 114.663Z"
                      fill="currentColor"
                    />
                    <path
                      d="M127.909 142C129.671 142 131.099 140.572 131.099 138.811C131.099 137.049 129.671 135.621 127.909 135.621C126.147 135.621 124.719 137.049 124.719 138.811C124.719 140.572 126.147 142 127.909 142Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_40">
                <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                  <i></i>About<i></i>
                </p>

                <p className="td_section_subtitle td_fs_18 mb-0">
                  Welcome to our DevOps Foundation Course, where theory meets
                  practice to empower professionals across all domains, from
                  seasoned developers and system administrators to enthusiastic
                  freshers eager to dive into the world of DevOps.
                </p>
              </div>
              <div className="td_mb_40 position-relative">
                <h2 className="td_section_title td_fs_48 td_mb_24">
                  Key Features of My Course{" "}
                </h2>
                <ul className="td_list td_style_2 td_fs_24 td_medium td_heading_color td_mp_0">
                  <li>
                    <svg
                      className="td_heading_color"
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0166 23.0239C11.0131 23.0239 11.009 23.0239 11.0055 23.0239C10.8602 23.021 10.7231 22.9589 10.6246 22.8522L0.578144 11.928C0.405879 11.7405 0.390058 11.4581 0.540644 11.2524C0.69123 11.0473 0.965449 10.977 1.19631 11.0848L10.3914 15.3903C10.4688 15.4266 10.5602 15.4091 10.6194 15.3475L24.6455 0.687967C24.8354 0.489334 25.1459 0.467655 25.3615 0.638748C25.5772 0.809842 25.627 1.11687 25.4764 1.34715L11.524 22.721C11.5041 22.752 11.4807 22.7802 11.4549 22.8065L11.3934 22.868C11.2932 22.9677 11.1572 23.0239 11.0166 23.0239Z"
                        fill="currentColor"
                      />
                    </svg>
                    Instructor-Led Sessions:
                    <p className="td_section_subtitle td_fs_18 mb-0">
                      Learn from experienced DevOps professionals who are
                      passionate about sharing their knowledge and expertise.
                    </p>
                  </li>
                  <li>
                    <svg
                      className="td_heading_color"
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0166 23.0239C11.0131 23.0239 11.009 23.0239 11.0055 23.0239C10.8602 23.021 10.7231 22.9589 10.6246 22.8522L0.578144 11.928C0.405879 11.7405 0.390058 11.4581 0.540644 11.2524C0.69123 11.0473 0.965449 10.977 1.19631 11.0848L10.3914 15.3903C10.4688 15.4266 10.5602 15.4091 10.6194 15.3475L24.6455 0.687967C24.8354 0.489334 25.1459 0.467655 25.3615 0.638748C25.5772 0.809842 25.627 1.11687 25.4764 1.34715L11.524 22.721C11.5041 22.752 11.4807 22.7802 11.4549 22.8065L11.3934 22.868C11.2932 22.9677 11.1572 23.0239 11.0166 23.0239Z"
                        fill="currentColor"
                      />
                    </svg>
                    Hands-On Exercises:
                    <p className="td_section_subtitle td_fs_18 mb-0">
                      Put theory into practice with hands-on exercises designed
                      to reinforce key concepts and skills.
                    </p>
                  </li>
                  <li>
                    <svg
                      className="td_heading_color"
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0166 23.0239C11.0131 23.0239 11.009 23.0239 11.0055 23.0239C10.8602 23.021 10.7231 22.9589 10.6246 22.8522L0.578144 11.928C0.405879 11.7405 0.390058 11.4581 0.540644 11.2524C0.69123 11.0473 0.965449 10.977 1.19631 11.0848L10.3914 15.3903C10.4688 15.4266 10.5602 15.4091 10.6194 15.3475L24.6455 0.687967C24.8354 0.489334 25.1459 0.467655 25.3615 0.638748C25.5772 0.809842 25.627 1.11687 25.4764 1.34715L11.524 22.721C11.5041 22.752 11.4807 22.7802 11.4549 22.8065L11.3934 22.868C11.2932 22.9677 11.1572 23.0239 11.0166 23.0239Z"
                        fill="currentColor"
                      />
                    </svg>
                    Real-World Case Studies:
                    <p className="td_section_subtitle td_fs_18 mb-0">
                      Explore real-world scenarios and learn how DevOps
                      principles are applied in different organizational
                      contexts.
                    </p>
                  </li>
                  <li>
                    <svg
                      className="td_heading_color"
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0166 23.0239C11.0131 23.0239 11.009 23.0239 11.0055 23.0239C10.8602 23.021 10.7231 22.9589 10.6246 22.8522L0.578144 11.928C0.405879 11.7405 0.390058 11.4581 0.540644 11.2524C0.69123 11.0473 0.965449 10.977 1.19631 11.0848L10.3914 15.3903C10.4688 15.4266 10.5602 15.4091 10.6194 15.3475L24.6455 0.687967C24.8354 0.489334 25.1459 0.467655 25.3615 0.638748C25.5772 0.809842 25.627 1.11687 25.4764 1.34715L11.524 22.721C11.5041 22.752 11.4807 22.7802 11.4549 22.8065L11.3934 22.868C11.2932 22.9677 11.1572 23.0239 11.0166 23.0239Z"
                        fill="currentColor"
                      />
                    </svg>
                    Mentorship:
                    <p className="td_section_subtitle td_fs_18 mb-0">
                      Receive personalized guidance and support from mentors who
                      are dedicated to helping you succeed.
                    </p>
                  </li>
                </ul>
                <div className="td_list_2_shape">
                  <svg
                    width="220"
                    height="209"
                    viewBox="0 0 220 209"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M90.7847 61.3658C91.6024 51.6359 99.3778 44.2904 108.872 44.2904H109.432L110.576 44.3708L199.107 52.276L108.927 0.757812L0 62.9865L108.927 125.219L174.727 87.6264L107.349 81.6096C97.3438 80.7169 89.9157 71.6346 90.7847 61.3658Z"
                      fill="#00001B"
                    />
                    <path
                      d="M219.905 71.3829C219.427 68.7423 217.086 66.3805 214.452 66.154L109.454 56.7779C106.028 56.4523 103.168 59.0162 102.88 62.4429C102.535 65.8041 104.996 68.8134 108.399 69.1914L207.853 78.0735V121.651C207.766 123.846 208.902 125.914 210.817 127.039C212.731 128.162 215.116 128.162 217.032 127.039C218.947 125.914 220.083 123.846 219.994 121.651V72.3617C219.994 72.0323 219.964 71.7048 219.905 71.3829Z"
                      fill="#00001B"
                    />
                    <path
                      d="M111.88 137.797C110.057 138.85 107.799 138.85 105.976 137.797L52.0037 106.964L14.5195 155.632C64.6571 160.466 97.5725 194.278 109.222 208.324C121.927 194.628 157.626 160.743 203.851 155.686L167.923 105.781L111.88 137.797Z"
                      fill="#00001B"
                    />
                  </svg>
                </div>
              </div>
              <Link
                to="/about"
                className="td_btn td_style_1 td_radius_30 td_medium td_with_shadow"
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
      </section>

      <section className="td_gray_bg_4">
        <div className="td_height_112 td_height_lg_75"></div>
        <div className="container">
          <div className="td_tabs td_style_1">
            <div
              className="td_section_heading td_style_1 td_type_2 td_with_tab_menu wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="td_section_heading_left">
                <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                  <i></i>
                  Latest courses
                  <i></i>
                </p>
                <h2 className="td_section_title td_fs_48 mb-0">
                  Pick my Latest Courses <br />
                  and Build your Skills
                </h2>
              </div>
              <div className="td_section_heading_right">
                <ul className="td_tab_links td_style_2 td_mp_0 td_medium td_fs_20 td_heading_color">
                  <li className="active">
                    <Link to="#td_tab_1">AWS DevOps</Link>
                  </li>

                  <li>
                    <Link to="#td_tab_3">DevSecOps</Link>
                  </li>
                  <li>
                    <Link to="#td_tab_4">All</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="td_height_50 td_height_lg_50"></div>
            <div className="td_tab_body">
              <div className="td_tab active" id="td_tab_1">
                <div className="row td_gap_y_30 td_row_gap_30">
                  <div
                    className="col-xl-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                  >
                    <div className="td_card td_style_5 td_type_1">
                      <Link to="/courselist" className="td_card_thumb">
                        <span className="td_card_thumb_in">
                          <img
                            src="assets/img/home_3/course_thumb_3.jpg"
                            alt=""
                          />
                          <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
                            New
                          </span>
                        </span>
                      </Link>
                      <div className="td_card_content">
                        <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                          <li>
                            <img src="assets/img/icons/user_3.svg" alt="" />
                            <span className="td_opacity_7">20 Seats</span>
                          </li>
                          <li>
                            <img src="assets/img/icons/book.svg" alt="" />
                            <span className="td_opacity_7">85 Like</span>
                          </li>
                        </ul>
                        <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                          <Link to="/courselist">AWS DevOps</Link>
                        </h2>
                        <div className="td_card_price_wrap td_mb_12">
                          <span>
                            Elevate Your AWS DevOps Skills: Seamlessly Integrate
                            AWS CodePipeline, CodeBuild, CodeDeploy,
                            CloudFormation, OpsWorks, CloudWatch, X-Ray, Lambda,
                            and CodeCommit for Peak Efficiency and Scalability!
                          </span>
                          <div className="td_card_review">
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
                            <span className="td_heading_color td_opacity_5 td_fs_14">
                              (5.0/6 Ratings)
                            </span>
                          </div>

                          
                        </div>
                        <div className="td_card_btn td_header_btns">
                            <Link
                              to="/purchescourseform"
                              className="td_btn td_style_1 td_radius_10 td_medium"
                            >
                              <span className="td_btn_in td_white_color td_accent_bg">
                                <span>Enroll Now</span>
                              </span>
                            </Link>
                            <Link
                              to="/courses"
                              className="td_btn td_style_1 td_radius_10 td_medium"
                            >
                              <span className="td_btn_in td_white_color td_accent_bg">
                                <span>View Course</span>
                              </span>
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="td_tab" id="td_tab_3">
                <div className="row td_gap_y_30 td_row_gap_30">
                  <div className="col-xl-6">
                    <div className="td_card td_style_5 td_type_1">
                      <Link to="/courselist" className="td_card_thumb">
                        <span className="td_card_thumb_in">
                          <img
                            src="assets/img/home_3/course_thumb_1.jpg"
                            alt=""
                          />
                          <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
                            New
                          </span>
                        </span>
                      </Link>
                      <div className="td_card_content">
                        <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                          <li>
                            <img src="assets/img/icons/user_3.svg" alt="" />
                            <span className="td_opacity_7">50 Seats</span>
                          </li>
                          <li>
                            <img src="assets/img/icons/book.svg" alt="" />
                            <span className="td_opacity_7">65 Like</span>
                          </li>
                        </ul>
                        <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                          <Link to="/courselist">DevSecOps</Link>
                        </h2>
                        <div className="td_card_price_wrap td_mb_12">
                          <span>
                          This course will lay Link strong foundation for you in
                            DevSecOps. Learn topics like Secure coding, SAST,
                            Secret Management, Securing CI/CD Pipelines, Monitoring and Incident Response, Compliance and auditing.
                          
                          </span>
                          <div className="td_card_review">
                            <div className="td_rating" data-rating="5">
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
                            <span className="td_heading_color td_opacity_5 td_fs_14">
                              (5.0/30 Ratings)
                            </span>
                          </div>
                          <span className="td_card_price td_accent_bg td_white_color td_fs_18 td_medium">
                            Comming Soon...
                          </span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="td_tab" id="td_tab_4">
                <div className="row td_gap_y_30 td_row_gap_30">
                  <div className="col-xl-6">
                    <div className="td_card td_style_5 td_type_1">
                      <Link to="course-details.html" className="td_card_thumb">
                        <span className="td_card_thumb_in">
                          <img
                            src="assets/img/home_3/course_thumb_3.jpg"
                            alt=""
                          />
                          <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
                            Best Seller
                          </span>
                        </span>
                      </Link>
                      <div className="td_card_content">
                        <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                          <li>
                            <img src="assets/img/icons/user_3.svg" alt="" />
                            <span className="td_opacity_7">20 Seats</span>
                          </li>
                          <li>
                            <img src="assets/img/icons/book.svg" alt="" />
                            <span className="td_opacity_7">85 Like</span>
                          </li>
                        </ul>
                        <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                          <Link to="course-details.html">AWS DevOps</Link>
                        </h2>
                        <div className="td_card_price_wrap td_mb_12">
                          <span>
                            Elevate Your AWS DevOps Skills: Seamlessly Integrate
                            AWS CodePipeline, CodeBuild, CodeDeploy,
                            CloudFormation, OpsWorks, CloudWatch, X-Ray, Lambda,
                            and CodeCommit for Peak Efficiency and Scalability!
                          </span>
                          <div className="td_card_review">
                            <div className="td_rating" data-rating="5">
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
                            <span className="td_heading_color td_opacity_5 td_fs_14">
                              (5.0/30 Ratings)
                            </span>
                          </div>
                          
                        </div>
                        <div className="td_card_btn td_header_btns">
                            <Link
                              to="/purchescourseform"
                              className="td_btn td_style_1 td_radius_10 td_medium"
                            >
                              <span className="td_btn_in td_white_color td_accent_bg">
                                <span>Enroll Now</span>
                              </span>
                            </Link>
                            <Link
                              to="/courses"
                              className="td_btn td_style_1 td_radius_10 td_medium"
                            >
                              <span className="td_btn_in td_white_color td_accent_bg">
                                <span>View Course</span>
                              </span>
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="td_card td_style_5 td_type_1">
                      <Link to="/courselist" className="td_card_thumb">
                        <span className="td_card_thumb_in">
                          <img
                            src="assets/img/home_3/course_thumb_1.jpg"
                            alt=""
                          />
                          <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
                            New
                          </span>
                        </span>
                      </Link>
                      <div className="td_card_content">
                        <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                          <li>
                            <img src="assets/img/icons/user_3.svg" alt="" />
                            <span className="td_opacity_7">50 Seats</span>
                          </li>
                          <li>
                            <img src="assets/img/icons/book.svg" alt="" />
                            <span className="td_opacity_7">65 Like</span>
                          </li>
                        </ul>
                        <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                          <Link to="/courselist">DevSecOps</Link>
                        </h2>
                        <div className="td_card_price_wrap td_mb_12">
                          <span>
                          This course will lay Link strong foundation for you in
                            DevSecOps. Learn topics like Secure coding, SAST,
                            Secret Management, Securing CI/CD Pipelines, Monitoring and Incident Response, Compliance and auditing.
                          
                          </span>
                          <div className="td_card_review">
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
                            <span className="td_heading_color td_opacity_5 td_fs_14">
                              (5.0/6 Ratings)
                            </span>
                          </div>
                          <span className="td_card_price td_accent_bg td_white_color td_fs_18 td_medium">
                            Comming Soon...
                          </span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_60 td_height_lg_40"></div>
          <div className="text-center">
            <Link
              to="/courselist"
              className="td_btn td_style_1 td_radius_10 td_medium"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>More Courses</span>
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
        <div className="td_height_120 td_height_lg_75"></div>
        <section className="td_accent_bg">
          <div className="td_height_112 td_height_lg_75"></div>
          <div className="container">
            <div
              className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="td_section_heading_left">
                <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_white_color td_opacity_9">
                  <i></i>

                  <i></i>
                </p>
                <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
                  My Approach
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_white_color">
                  Hey...! At the DevOps Foundation Course, I take Link hands-on,
                  instructor-led approach to learning. My carefully crafted
                  curriculum covers Link wide range of DevOps principles and
                  practices, ensuring that participants gain Link deep
                  understanding of key concepts. Through interactive lectures,
                  real-world case studies,
                </p>
              </div>
              <div className="td_section_heading_right">
                <p className="td_section_subtitle td_fs_18 mb-0 td_white_color">
                  and hands-on exercises, you'll not only learn the theory but
                  also gain practical experience applying DevOps principles in Link
                  simulated environment.
                </p>
              </div>
            </div>
            <div className="td_height_50 td_height_lg_50"></div>
            <div className="row td_gap_y_30">
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.25s"
              >
                <div className="td_card td_style_1 td_type_2 td_white_bg">
                  <Link
                    to="/courselist"
                    className="td_card_thumb d-block"
                  >
                    <img src="assets/img/home_2/devops.jpg" alt="" />
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                  <div className="td_card_info">
                    <div className="td_card_info_in">
                      <div className="td_mb_30">
                        <ul className="td_card_meta td_mp_0 td_medium td_heading_color">
                          <li>
                            <svg
                              className="td_accent_color"
                              width="22"
                              height="24"
                              viewBox="0 0 22 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.3308 11.7869H19.0049C19.3833 11.7869 19.6913 11.479 19.6913 11.1005V9.42642C19.6913 9.04795 19.3833 8.74003 19.0049 8.74003H17.3308C16.9523 8.74003 16.6444 9.04795 16.6444 9.42642V11.1005C16.6444 11.479 16.9523 11.7869 17.3308 11.7869ZM17.3475 9.44316H18.9881V11.0838H17.3475V9.44316ZM17.3308 16.24H19.0049C19.3833 16.24 19.6913 15.9321 19.6913 15.5536V13.8795C19.6913 13.5011 19.3833 13.1932 19.0049 13.1932H17.3308C16.9523 13.1932 16.6444 13.5011 16.6444 13.8795V15.5536C16.6444 15.9321 16.9523 16.24 17.3308 16.24ZM17.3475 13.8963H18.9881V15.5369H17.3475V13.8963ZM12.5535 11.7869H14.2276C14.606 11.7869 14.914 11.479 14.914 11.1005V9.42642C14.914 9.04795 14.606 8.74003 14.2276 8.74003H12.5535C12.175 8.74003 11.8671 9.04795 11.8671 9.42642V11.1005C11.8671 11.479 12.175 11.7869 12.5535 11.7869ZM12.5702 9.44316H14.2108V11.0838H12.5702V9.44316ZM4.67294 17.4375H2.99884C2.62037 17.4375 2.31245 17.7454 2.31245 18.1239V19.798C2.31245 20.1765 2.62037 20.4844 2.99884 20.4844H4.67294C5.05141 20.4844 5.35933 20.1765 5.35933 19.798V18.1239C5.35933 17.7454 5.05141 17.4375 4.67294 17.4375ZM4.6562 19.7812H3.01558V18.1406H4.6562V19.7812ZM4.67294 8.74003H2.99884C2.62037 8.74003 2.31245 9.04795 2.31245 9.42642V11.1005C2.31245 11.479 2.62037 11.7869 2.99884 11.7869H4.67294C5.05141 11.7869 5.35933 11.479 5.35933 11.1005V9.42642C5.35933 9.04791 5.05141 8.74003 4.67294 8.74003ZM4.6562 11.0838H3.01558V9.44316H4.6562V11.0838ZM12.5535 16.1356H14.2276C14.606 16.1356 14.914 15.8277 14.914 15.4493V13.7752C14.914 13.3967 14.606 13.0888 14.2276 13.0888H12.5535C12.175 13.0888 11.8671 13.3967 11.8671 13.7752V15.4493C11.8671 15.8277 12.175 16.1356 12.5535 16.1356ZM12.5702 13.7919H14.2108V15.4325H12.5702V13.7919ZM20.0404 1.60659H18.5373V1.06908C18.5373 0.479578 18.0578 0 17.4683 0H17.3068C16.7174 0 16.2378 0.479578 16.2378 1.06908V1.60659H5.76592V1.06908C5.76592 0.479578 5.28634 0 4.69684 0H4.53541C3.94591 0 3.46633 0.479578 3.46633 1.06908V1.60659H1.96328C0.992734 1.60659 0.203125 2.3962 0.203125 3.36675V22.2422C0.203125 23.2115 0.991656 24 1.96094 24H20.0429C21.0122 24 21.8007 23.2115 21.8007 22.2422V3.36675C21.8006 2.3962 21.011 1.60659 20.0404 1.60659ZM16.9409 1.06908C16.9409 0.867281 17.1051 0.703125 17.3069 0.703125H17.4683C17.6701 0.703125 17.8343 0.867281 17.8343 1.06908V1.60659H16.9409V1.06908ZM4.1695 1.06908C4.1695 0.867281 4.33366 0.703125 4.53545 0.703125H4.69689C4.89869 0.703125 5.06284 0.867281 5.06284 1.06908V1.60659H4.16955V1.06908H4.1695ZM21.0975 22.2422C21.0975 22.8238 20.6244 23.2969 20.0428 23.2969H1.96089C1.37931 23.2969 0.906203 22.8238 0.906203 22.2422V22.24C1.20077 22.4619 1.56691 22.5938 1.96328 22.5938H16.2172C16.6873 22.5938 17.1294 22.4107 17.4618 22.0782L21.0975 18.4425V22.2422ZM17.1031 21.4425C17.1306 21.3288 17.1456 21.2101 17.1456 21.088V18.7413C17.1456 18.2988 17.5057 17.9387 17.9482 17.9387H20.2949C20.417 17.9387 20.5357 17.9237 20.6494 17.8962L17.1031 21.4425ZM21.0975 6.63066H6.11748C5.92333 6.63066 5.76592 6.78806 5.76592 6.98222C5.76592 7.17637 5.92333 7.33378 6.11748 7.33378H21.0975V16.4331C21.0975 16.8756 20.7375 17.2357 20.2949 17.2357H17.9482C17.118 17.2357 16.4425 17.9111 16.4425 18.7413V21.0881C16.4425 21.5306 16.0825 21.8907 15.64 21.8907H1.96328C1.38044 21.8907 0.90625 21.4165 0.90625 20.8336V7.33378H4.71123C4.90539 7.33378 5.0628 7.17637 5.0628 6.98222C5.0628 6.78806 4.90539 6.63066 4.71123 6.63066H0.906203V3.36675C0.906203 2.78391 1.38039 2.30972 1.96323 2.30972H3.46633V3.34341C3.46633 3.93291 3.94591 4.41248 4.53541 4.41248C4.72956 4.41248 4.88697 4.25508 4.88697 4.06092C4.88697 3.86677 4.72956 3.70936 4.53541 3.70936C4.33361 3.70936 4.16945 3.5452 4.16945 3.34341V2.30972H16.2378V3.34341C16.2378 3.93291 16.7174 4.41248 17.3069 4.41248C17.501 4.41248 17.6584 4.25508 17.6584 4.06092C17.6584 3.86677 17.501 3.70936 17.3069 3.70936C17.1051 3.70936 16.9409 3.5452 16.9409 3.34341V2.30972H20.0405C20.6233 2.30972 21.0975 2.78391 21.0975 3.36675V6.63066ZM4.67294 13.0888H2.99884C2.62037 13.0888 2.31245 13.3967 2.31245 13.7752V15.4493C2.31245 15.8277 2.62037 16.1356 2.99884 16.1356H4.67294C5.05141 16.1356 5.35933 15.8277 5.35933 15.4493V13.7752C5.35933 13.3966 5.05141 13.0888 4.67294 13.0888ZM4.6562 15.4325H3.01558V13.7919H4.6562V15.4325ZM7.77616 11.7869H9.45025C9.82872 11.7869 10.1366 11.479 10.1366 11.1005V9.42642C10.1366 9.04795 9.82872 8.74003 9.45025 8.74003H7.77616C7.39769 8.74003 7.08977 9.04795 7.08977 9.42642V11.1005C7.08977 11.479 7.39769 11.7869 7.77616 11.7869ZM7.79289 9.44316H9.43352V11.0838H7.79289V9.44316ZM12.5698 19.7812C12.5611 19.5948 12.4072 19.4464 12.2186 19.4464C12.0244 19.4464 11.867 19.6038 11.867 19.798C11.867 20.1765 12.175 20.4844 12.5534 20.4844H14.2275C14.606 20.4844 14.9139 20.1765 14.9139 19.798V18.1239C14.9139 17.7454 14.606 17.4375 14.2275 17.4375H12.5534C12.175 17.4375 11.867 17.7454 11.867 18.1239V18.6067C11.867 18.8009 12.0244 18.9583 12.2186 18.9583C12.4127 18.9583 12.5702 18.8009 12.5702 18.6067V18.1406H14.2108V19.7812H12.5698ZM7.77616 16.1356H9.45025C9.82872 16.1356 10.1366 15.8277 10.1366 15.4493V13.7752C10.1366 13.3967 9.82872 13.0888 9.45025 13.0888H7.77616C7.39769 13.0888 7.08977 13.3967 7.08977 13.7752V15.4493C7.08977 15.8277 7.39769 16.1356 7.77616 16.1356ZM7.79289 13.7919H9.43352V15.4325H7.79289V13.7919ZM7.77616 20.4844H9.45025C9.82872 20.4844 10.1366 20.1765 10.1366 19.798V18.1239C10.1366 17.7454 9.82872 17.4375 9.45025 17.4375H7.77616C7.39769 17.4375 7.08977 17.7454 7.08977 18.1239V19.798C7.08977 20.1765 7.39769 20.4844 7.77616 20.4844ZM7.79289 18.1406H9.43352V19.7812H7.79289V18.1406Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <span>
                              {dateFormat(new Date(), "dddd, mmmm dS, yyyy")}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h2 className="td_card_title td_fs_32 td_semibold td_mb_25">
                        <Link to="/courselist">
                          Bridging the Gap in DevOps Skills
                        </Link>
                      </h2>
                      <p className="td_fs_18 td_mb_40">
                        In today's fast-paced tech industry, the demand for
                        skilled DevOps professionals is at an all-time high.
                        Yet, many individuals entering or currently working in
                        DevOps roles find themselves lacking the necessary
                        skills to thrive in this dynamic field. Recognizing this
                        challenge, I developed the DevOps Foundation Course to
                        bridge the gap in DevOps skills and empower
                        professionals like you to succeed.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="td_card td_style_1 td_type_2 td_white_bg">
                  <Link
                    to="/courselist"
                    className="td_card_thumb d-block"
                  >
                    <img src="assets/img/home_2/insights.jpg" alt="" />
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                  <div className="td_card_info">
                    <div className="td_card_info_in">
                      <div className="td_mb_30">
                        <ul className="td_card_meta td_mp_0 td_medium td_heading_color">
                          <li>
                            <svg
                              className="td_accent_color"
                              width="22"
                              height="24"
                              viewBox="0 0 22 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.3308 11.7869H19.0049C19.3833 11.7869 19.6913 11.479 19.6913 11.1005V9.42642C19.6913 9.04795 19.3833 8.74003 19.0049 8.74003H17.3308C16.9523 8.74003 16.6444 9.04795 16.6444 9.42642V11.1005C16.6444 11.479 16.9523 11.7869 17.3308 11.7869ZM17.3475 9.44316H18.9881V11.0838H17.3475V9.44316ZM17.3308 16.24H19.0049C19.3833 16.24 19.6913 15.9321 19.6913 15.5536V13.8795C19.6913 13.5011 19.3833 13.1932 19.0049 13.1932H17.3308C16.9523 13.1932 16.6444 13.5011 16.6444 13.8795V15.5536C16.6444 15.9321 16.9523 16.24 17.3308 16.24ZM17.3475 13.8963H18.9881V15.5369H17.3475V13.8963ZM12.5535 11.7869H14.2276C14.606 11.7869 14.914 11.479 14.914 11.1005V9.42642C14.914 9.04795 14.606 8.74003 14.2276 8.74003H12.5535C12.175 8.74003 11.8671 9.04795 11.8671 9.42642V11.1005C11.8671 11.479 12.175 11.7869 12.5535 11.7869ZM12.5702 9.44316H14.2108V11.0838H12.5702V9.44316ZM4.67294 17.4375H2.99884C2.62037 17.4375 2.31245 17.7454 2.31245 18.1239V19.798C2.31245 20.1765 2.62037 20.4844 2.99884 20.4844H4.67294C5.05141 20.4844 5.35933 20.1765 5.35933 19.798V18.1239C5.35933 17.7454 5.05141 17.4375 4.67294 17.4375ZM4.6562 19.7812H3.01558V18.1406H4.6562V19.7812ZM4.67294 8.74003H2.99884C2.62037 8.74003 2.31245 9.04795 2.31245 9.42642V11.1005C2.31245 11.479 2.62037 11.7869 2.99884 11.7869H4.67294C5.05141 11.7869 5.35933 11.479 5.35933 11.1005V9.42642C5.35933 9.04791 5.05141 8.74003 4.67294 8.74003ZM4.6562 11.0838H3.01558V9.44316H4.6562V11.0838ZM12.5535 16.1356H14.2276C14.606 16.1356 14.914 15.8277 14.914 15.4493V13.7752C14.914 13.3967 14.606 13.0888 14.2276 13.0888H12.5535C12.175 13.0888 11.8671 13.3967 11.8671 13.7752V15.4493C11.8671 15.8277 12.175 16.1356 12.5535 16.1356ZM12.5702 13.7919H14.2108V15.4325H12.5702V13.7919ZM20.0404 1.60659H18.5373V1.06908C18.5373 0.479578 18.0578 0 17.4683 0H17.3068C16.7174 0 16.2378 0.479578 16.2378 1.06908V1.60659H5.76592V1.06908C5.76592 0.479578 5.28634 0 4.69684 0H4.53541C3.94591 0 3.46633 0.479578 3.46633 1.06908V1.60659H1.96328C0.992734 1.60659 0.203125 2.3962 0.203125 3.36675V22.2422C0.203125 23.2115 0.991656 24 1.96094 24H20.0429C21.0122 24 21.8007 23.2115 21.8007 22.2422V3.36675C21.8006 2.3962 21.011 1.60659 20.0404 1.60659ZM16.9409 1.06908C16.9409 0.867281 17.1051 0.703125 17.3069 0.703125H17.4683C17.6701 0.703125 17.8343 0.867281 17.8343 1.06908V1.60659H16.9409V1.06908ZM4.1695 1.06908C4.1695 0.867281 4.33366 0.703125 4.53545 0.703125H4.69689C4.89869 0.703125 5.06284 0.867281 5.06284 1.06908V1.60659H4.16955V1.06908H4.1695ZM21.0975 22.2422C21.0975 22.8238 20.6244 23.2969 20.0428 23.2969H1.96089C1.37931 23.2969 0.906203 22.8238 0.906203 22.2422V22.24C1.20077 22.4619 1.56691 22.5938 1.96328 22.5938H16.2172C16.6873 22.5938 17.1294 22.4107 17.4618 22.0782L21.0975 18.4425V22.2422ZM17.1031 21.4425C17.1306 21.3288 17.1456 21.2101 17.1456 21.088V18.7413C17.1456 18.2988 17.5057 17.9387 17.9482 17.9387H20.2949C20.417 17.9387 20.5357 17.9237 20.6494 17.8962L17.1031 21.4425ZM21.0975 6.63066H6.11748C5.92333 6.63066 5.76592 6.78806 5.76592 6.98222C5.76592 7.17637 5.92333 7.33378 6.11748 7.33378H21.0975V16.4331C21.0975 16.8756 20.7375 17.2357 20.2949 17.2357H17.9482C17.118 17.2357 16.4425 17.9111 16.4425 18.7413V21.0881C16.4425 21.5306 16.0825 21.8907 15.64 21.8907H1.96328C1.38044 21.8907 0.90625 21.4165 0.90625 20.8336V7.33378H4.71123C4.90539 7.33378 5.0628 7.17637 5.0628 6.98222C5.0628 6.78806 4.90539 6.63066 4.71123 6.63066H0.906203V3.36675C0.906203 2.78391 1.38039 2.30972 1.96323 2.30972H3.46633V3.34341C3.46633 3.93291 3.94591 4.41248 4.53541 4.41248C4.72956 4.41248 4.88697 4.25508 4.88697 4.06092C4.88697 3.86677 4.72956 3.70936 4.53541 3.70936C4.33361 3.70936 4.16945 3.5452 4.16945 3.34341V2.30972H16.2378V3.34341C16.2378 3.93291 16.7174 4.41248 17.3069 4.41248C17.501 4.41248 17.6584 4.25508 17.6584 4.06092C17.6584 3.86677 17.501 3.70936 17.3069 3.70936C17.1051 3.70936 16.9409 3.5452 16.9409 3.34341V2.30972H20.0405C20.6233 2.30972 21.0975 2.78391 21.0975 3.36675V6.63066ZM4.67294 13.0888H2.99884C2.62037 13.0888 2.31245 13.3967 2.31245 13.7752V15.4493C2.31245 15.8277 2.62037 16.1356 2.99884 16.1356H4.67294C5.05141 16.1356 5.35933 15.8277 5.35933 15.4493V13.7752C5.35933 13.3966 5.05141 13.0888 4.67294 13.0888ZM4.6562 15.4325H3.01558V13.7919H4.6562V15.4325ZM7.77616 11.7869H9.45025C9.82872 11.7869 10.1366 11.479 10.1366 11.1005V9.42642C10.1366 9.04795 9.82872 8.74003 9.45025 8.74003H7.77616C7.39769 8.74003 7.08977 9.04795 7.08977 9.42642V11.1005C7.08977 11.479 7.39769 11.7869 7.77616 11.7869ZM7.79289 9.44316H9.43352V11.0838H7.79289V9.44316ZM12.5698 19.7812C12.5611 19.5948 12.4072 19.4464 12.2186 19.4464C12.0244 19.4464 11.867 19.6038 11.867 19.798C11.867 20.1765 12.175 20.4844 12.5534 20.4844H14.2275C14.606 20.4844 14.9139 20.1765 14.9139 19.798V18.1239C14.9139 17.7454 14.606 17.4375 14.2275 17.4375H12.5534C12.175 17.4375 11.867 17.7454 11.867 18.1239V18.6067C11.867 18.8009 12.0244 18.9583 12.2186 18.9583C12.4127 18.9583 12.5702 18.8009 12.5702 18.6067V18.1406H14.2108V19.7812H12.5698ZM7.77616 16.1356H9.45025C9.82872 16.1356 10.1366 15.8277 10.1366 15.4493V13.7752C10.1366 13.3967 9.82872 13.0888 9.45025 13.0888H7.77616C7.39769 13.0888 7.08977 13.3967 7.08977 13.7752V15.4493C7.08977 15.8277 7.39769 16.1356 7.77616 16.1356ZM7.79289 13.7919H9.43352V15.4325H7.79289V13.7919ZM7.77616 20.4844H9.45025C9.82872 20.4844 10.1366 20.1765 10.1366 19.798V18.1239C10.1366 17.7454 9.82872 17.4375 9.45025 17.4375H7.77616C7.39769 17.4375 7.08977 17.7454 7.08977 18.1239V19.798C7.08977 20.1765 7.39769 20.4844 7.77616 20.4844ZM7.79289 18.1406H9.43352V19.7812H7.79289V18.1406Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <span>
                              {dateFormat(new Date(), "dddd, mmmm dS, yyyy")}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h2 className="td_card_title td_fs_32 td_semibold td_mb_25">
                        <Link to="/courselist">
                          Developed from Industry Insights
                        </Link>
                      </h2>
                      <p className="td_fs_18 td_mb_40">
                        My course was born out of extensive research and
                        insights gathered from interviews with hiring managers,
                        HR professionals, and industry experts. Through these
                        interactions, I identified Link common theme: Link significant
                        shortage of individuals with practical DevOps skills.
                        This shortage not only creates challenges for
                        organizations seeking to adopt DevOps practices but also
                        hinders career growth opportunities for aspiring DevOps
                        professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.35s"
              >
                <div className="td_card td_style_1 td_type_2 td_white_bg">
                  <Link
                    to="/courselist"
                    className="td_card_thumb d-block"
                  >
                    <img src="assets/img/home_2/Training.jpg" alt="" />
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                  <div className="td_card_info">
                    <div className="td_card_info_in">
                      <div className="td_mb_30">
                        <ul className="td_card_meta td_mp_0 td_medium td_heading_color">
                          <li>
                            <svg
                              className="td_accent_color"
                              width="22"
                              height="24"
                              viewBox="0 0 22 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.3308 11.7869H19.0049C19.3833 11.7869 19.6913 11.479 19.6913 11.1005V9.42642C19.6913 9.04795 19.3833 8.74003 19.0049 8.74003H17.3308C16.9523 8.74003 16.6444 9.04795 16.6444 9.42642V11.1005C16.6444 11.479 16.9523 11.7869 17.3308 11.7869ZM17.3475 9.44316H18.9881V11.0838H17.3475V9.44316ZM17.3308 16.24H19.0049C19.3833 16.24 19.6913 15.9321 19.6913 15.5536V13.8795C19.6913 13.5011 19.3833 13.1932 19.0049 13.1932H17.3308C16.9523 13.1932 16.6444 13.5011 16.6444 13.8795V15.5536C16.6444 15.9321 16.9523 16.24 17.3308 16.24ZM17.3475 13.8963H18.9881V15.5369H17.3475V13.8963ZM12.5535 11.7869H14.2276C14.606 11.7869 14.914 11.479 14.914 11.1005V9.42642C14.914 9.04795 14.606 8.74003 14.2276 8.74003H12.5535C12.175 8.74003 11.8671 9.04795 11.8671 9.42642V11.1005C11.8671 11.479 12.175 11.7869 12.5535 11.7869ZM12.5702 9.44316H14.2108V11.0838H12.5702V9.44316ZM4.67294 17.4375H2.99884C2.62037 17.4375 2.31245 17.7454 2.31245 18.1239V19.798C2.31245 20.1765 2.62037 20.4844 2.99884 20.4844H4.67294C5.05141 20.4844 5.35933 20.1765 5.35933 19.798V18.1239C5.35933 17.7454 5.05141 17.4375 4.67294 17.4375ZM4.6562 19.7812H3.01558V18.1406H4.6562V19.7812ZM4.67294 8.74003H2.99884C2.62037 8.74003 2.31245 9.04795 2.31245 9.42642V11.1005C2.31245 11.479 2.62037 11.7869 2.99884 11.7869H4.67294C5.05141 11.7869 5.35933 11.479 5.35933 11.1005V9.42642C5.35933 9.04791 5.05141 8.74003 4.67294 8.74003ZM4.6562 11.0838H3.01558V9.44316H4.6562V11.0838ZM12.5535 16.1356H14.2276C14.606 16.1356 14.914 15.8277 14.914 15.4493V13.7752C14.914 13.3967 14.606 13.0888 14.2276 13.0888H12.5535C12.175 13.0888 11.8671 13.3967 11.8671 13.7752V15.4493C11.8671 15.8277 12.175 16.1356 12.5535 16.1356ZM12.5702 13.7919H14.2108V15.4325H12.5702V13.7919ZM20.0404 1.60659H18.5373V1.06908C18.5373 0.479578 18.0578 0 17.4683 0H17.3068C16.7174 0 16.2378 0.479578 16.2378 1.06908V1.60659H5.76592V1.06908C5.76592 0.479578 5.28634 0 4.69684 0H4.53541C3.94591 0 3.46633 0.479578 3.46633 1.06908V1.60659H1.96328C0.992734 1.60659 0.203125 2.3962 0.203125 3.36675V22.2422C0.203125 23.2115 0.991656 24 1.96094 24H20.0429C21.0122 24 21.8007 23.2115 21.8007 22.2422V3.36675C21.8006 2.3962 21.011 1.60659 20.0404 1.60659ZM16.9409 1.06908C16.9409 0.867281 17.1051 0.703125 17.3069 0.703125H17.4683C17.6701 0.703125 17.8343 0.867281 17.8343 1.06908V1.60659H16.9409V1.06908ZM4.1695 1.06908C4.1695 0.867281 4.33366 0.703125 4.53545 0.703125H4.69689C4.89869 0.703125 5.06284 0.867281 5.06284 1.06908V1.60659H4.16955V1.06908H4.1695ZM21.0975 22.2422C21.0975 22.8238 20.6244 23.2969 20.0428 23.2969H1.96089C1.37931 23.2969 0.906203 22.8238 0.906203 22.2422V22.24C1.20077 22.4619 1.56691 22.5938 1.96328 22.5938H16.2172C16.6873 22.5938 17.1294 22.4107 17.4618 22.0782L21.0975 18.4425V22.2422ZM17.1031 21.4425C17.1306 21.3288 17.1456 21.2101 17.1456 21.088V18.7413C17.1456 18.2988 17.5057 17.9387 17.9482 17.9387H20.2949C20.417 17.9387 20.5357 17.9237 20.6494 17.8962L17.1031 21.4425ZM21.0975 6.63066H6.11748C5.92333 6.63066 5.76592 6.78806 5.76592 6.98222C5.76592 7.17637 5.92333 7.33378 6.11748 7.33378H21.0975V16.4331C21.0975 16.8756 20.7375 17.2357 20.2949 17.2357H17.9482C17.118 17.2357 16.4425 17.9111 16.4425 18.7413V21.0881C16.4425 21.5306 16.0825 21.8907 15.64 21.8907H1.96328C1.38044 21.8907 0.90625 21.4165 0.90625 20.8336V7.33378H4.71123C4.90539 7.33378 5.0628 7.17637 5.0628 6.98222C5.0628 6.78806 4.90539 6.63066 4.71123 6.63066H0.906203V3.36675C0.906203 2.78391 1.38039 2.30972 1.96323 2.30972H3.46633V3.34341C3.46633 3.93291 3.94591 4.41248 4.53541 4.41248C4.72956 4.41248 4.88697 4.25508 4.88697 4.06092C4.88697 3.86677 4.72956 3.70936 4.53541 3.70936C4.33361 3.70936 4.16945 3.5452 4.16945 3.34341V2.30972H16.2378V3.34341C16.2378 3.93291 16.7174 4.41248 17.3069 4.41248C17.501 4.41248 17.6584 4.25508 17.6584 4.06092C17.6584 3.86677 17.501 3.70936 17.3069 3.70936C17.1051 3.70936 16.9409 3.5452 16.9409 3.34341V2.30972H20.0405C20.6233 2.30972 21.0975 2.78391 21.0975 3.36675V6.63066ZM4.67294 13.0888H2.99884C2.62037 13.0888 2.31245 13.3967 2.31245 13.7752V15.4493C2.31245 15.8277 2.62037 16.1356 2.99884 16.1356H4.67294C5.05141 16.1356 5.35933 15.8277 5.35933 15.4493V13.7752C5.35933 13.3966 5.05141 13.0888 4.67294 13.0888ZM4.6562 15.4325H3.01558V13.7919H4.6562V15.4325ZM7.77616 11.7869H9.45025C9.82872 11.7869 10.1366 11.479 10.1366 11.1005V9.42642C10.1366 9.04795 9.82872 8.74003 9.45025 8.74003H7.77616C7.39769 8.74003 7.08977 9.04795 7.08977 9.42642V11.1005C7.08977 11.479 7.39769 11.7869 7.77616 11.7869ZM7.79289 9.44316H9.43352V11.0838H7.79289V9.44316ZM12.5698 19.7812C12.5611 19.5948 12.4072 19.4464 12.2186 19.4464C12.0244 19.4464 11.867 19.6038 11.867 19.798C11.867 20.1765 12.175 20.4844 12.5534 20.4844H14.2275C14.606 20.4844 14.9139 20.1765 14.9139 19.798V18.1239C14.9139 17.7454 14.606 17.4375 14.2275 17.4375H12.5534C12.175 17.4375 11.867 17.7454 11.867 18.1239V18.6067C11.867 18.8009 12.0244 18.9583 12.2186 18.9583C12.4127 18.9583 12.5702 18.8009 12.5702 18.6067V18.1406H14.2108V19.7812H12.5698ZM7.77616 16.1356H9.45025C9.82872 16.1356 10.1366 15.8277 10.1366 15.4493V13.7752C10.1366 13.3967 9.82872 13.0888 9.45025 13.0888H7.77616C7.39769 13.0888 7.08977 13.3967 7.08977 13.7752V15.4493C7.08977 15.8277 7.39769 16.1356 7.77616 16.1356ZM7.79289 13.7919H9.43352V15.4325H7.79289V13.7919ZM7.77616 20.4844H9.45025C9.82872 20.4844 10.1366 20.1765 10.1366 19.798V18.1239C10.1366 17.7454 9.82872 17.4375 9.45025 17.4375H7.77616C7.39769 17.4375 7.08977 17.7454 7.08977 18.1239V19.798C7.08977 20.1765 7.39769 20.4844 7.77616 20.4844ZM7.79289 18.1406H9.43352V19.7812H7.79289V18.1406Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <span>
                              {dateFormat(new Date(), "dddd, mmmm dS, yyyy")}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h2 className="td_card_title td_fs_32 td_semibold td_mb_25">
                        <Link to="/courselist">
                          Addressing Common Issues in DevOps Training
                        </Link>
                      </h2>
                      <p className="td_fs_18 td_mb_40">
                        While there are numerous DevOps courses available in the
                        market, I observed that many fall short in providing
                        comprehensive, instructor-led training with Link focus on
                        practical skills and mentorship. Too often, learners are
                        left to navigate complex concepts on their own, without
                        proper guidance or support. My mission is to change
                        that.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="td_height_120 td_height_lg_80"></div>
        </section>
        
        <StartedCourseDetail {...startedCourseTimeingData} />
      </section>
    </>
  );
};

export default Home;
