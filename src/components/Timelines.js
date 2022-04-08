/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import timelineElements from "./timelineElements";
import { ReactComponent as WorkIcon } from "./../assets/icons/work.svg";
import { ReactComponent as SchoolIcon } from "./../assets/icons/school.svg";
import { ReactComponent as CertificateIcon } from "./../assets/icons/certificate.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timelines.css";

const Timelines = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#F9C74F" };
  let certificateIconStyles = { background: "#0074D9" };

  return (
    <section id="timelines" className="timelines">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-dark text-center">Timeline</h2>
            <hr />
          </div>
        </div>
        <div className="row row-value">
          <div className="col">
            <VerticalTimeline>
              {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                let isSchoolIcon = element.icon === "school";
                let showButton =
                  element.buttonText !== undefined &&
                  element.buttonText !== null &&
                  element.buttonText !== "";

                return (
                  <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={
                      isWorkIcon
                        ? workIconStyles
                        : isSchoolIcon
                        ? schoolIconStyles
                        : certificateIconStyles
                    }
                    icon={
                      isWorkIcon ? (
                        <WorkIcon />
                      ) : isSchoolIcon ? (
                        <SchoolIcon />
                      ) : (
                        <CertificateIcon />
                      )
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    {showButton && (
                      <a
                        className={`button ${
                          isWorkIcon
                            ? "workButton"
                            : isSchoolIcon
                            ? "schoolButton"
                            : "certificateButton"
                        }`}
                        href="#"
                      >
                        {element.buttonText}
                      </a>
                    )}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timelines;
