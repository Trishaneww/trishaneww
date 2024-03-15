import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../../images/studyhive-logo.png";
import gallery1 from "../../images/studyhive1.png";
import gallery2 from "../../images/studyhive2.png";
import gallery3 from "../../images/studyhive3.png";
import gallery4 from "../../images/studyhive4.png";
import gallery5 from "../../images/studyhive5.png";
import gallery6 from "../../images/studyhive6.png";
import gallery7 from "../../images/studyhive7.png";
import gallery8 from "../../images/studyhive8.png";
import gallery9 from "../../images/studyhive9.png";
import "./Projects.scss";

const Studyhive = () => {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />

      <div className="project-container">
        <h1 className="project-container__title">STUDY HIVE</h1>
        <div className="project-container__divider"></div>

        <section className="information-container">
          <div className="information-container__stats">
            <div className="information-container__stats-stat">
              <p className="information-container__stats-title">CATEGORY</p>
              <p>Software Development</p>
            </div>

            <div className="information-container__stats-stat">
              <p className="information-container__stats-title">YEAR</p>
              <p>2024</p>
            </div>

            <div className="information-container__stats-stat">
              <p className="information-container__stats-title">CLIENT</p>
              <p>BrainStation</p>
            </div>
          </div>

          <div className="information-container__descr">
            <p>ACT Responsable is a french association created to identify and collect the best communications campaigns around the world in order to raise awareness on social and environmental issues (solidarity, environment, human rights and education). The aim was to redesign the french website by focusing on their actions which are exhibitions, schools interventions or even the NGAd club.
            </p>

            <a><GoArrowUpRight color="white" className="link-arrow" href="https://github.com/Trishaneww/trishaneww"/> View github source code</a>
          </div>

        </section>

        <section className="project-gallery">
          <p className="project-gallery__title">HOMEPAGE</p>
          <img src={gallery4} alt="gallery 3" />
          <img src={gallery3} alt="gallery 1" />
          <p className="project-gallery__title">USER TESTS</p>
          <img src={gallery5} alt="gallery 1" />
          <img src={gallery6} alt="gallery 1" />
          <img src={gallery7} alt="gallery 1" />
          <img src={gallery8} alt="gallery 1" />
          <p className="project-gallery__title">USERS SCORE REPORT</p>
          <img src={gallery2} alt="gallery 2" />
          <p className="project-gallery__title">STUDY HIVES + LIVE CHAT</p>
          <img src={gallery9} alt="gallery 1" />
          <p className="project-gallery__title">LOGIN</p>
          <img src={gallery1} alt="gallery 1" />
        </section>

        <div className="project-container__divider"></div>
        <div>
          <p>NEXT PROJECT</p>
          <p>YA SOLUTIONS</p>

        </div>

        
      </div>
    </>
  );
};

export default Studyhive;
