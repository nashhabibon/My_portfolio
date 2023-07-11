import React, { useState } from "react";
import { format } from "date-fns";
import { FiGithub, FiExternalLink, FiPlay } from "react-icons/fi";
import { MdPlayDisabled, MdOutlineClose } from "react-icons/md";

const Github = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="projects_card">
        <div className="projects_card_image">
          {props.socialPreview && props.socialPreview.length > 0 ? (
            <img
              className="social_preview"
              src={props.socialPreview}
              alt={`${props.name} Social Preview`}
              onClick={handleImageClick}
            />
          ) : (
            <img className="social_preview" src="" alt="No Social Preview" />
          )}

          {showPopup && (
            <div className="popup">
              <div className="popup_content">
                <button className="btn_close_popup" onClick={closePopup}>
                  <MdOutlineClose />
                </button>
                <img
                  className="social_preview_popup"
                  src={props.socialPreview}
                  alt={`${props.name} Social Preview`}
                />
              </div>
            </div>
          )}
        </div>

        <div className="project_card_info">
          <a href={props.html_url} target="blank">
            <span className="title">{props.name}</span>
          </a>
          <span className="project_created_date">
            Created {format(new Date(props.created_at), "dd MMMM yyyy")}
          </span>
          <br />
          <div className="project_card_description">
            <p> {props.description}</p>
          </div>
        </div>
        <div className="projects_card_footer">
          <div className="projects_language_container">
            {props.languages && props.languages.length > 0 ? (
              <span className="projects_language">
                {props.languages.map((language, index) => (
                  <span key={index}>{language}</span>
                ))}
              </span>
            ) : (
              <span className="projects_language">No languages to display</span>
            )}
          </div>
          <div className="projects_action_box">
            <a href={props.html_url} target="blank">
              <FiGithub />
            </a>

            {/* if homepage url == true external link display , else play button*/}
            {props.homepage && props.homepage.length > 0 ? (
              <a href={props.homepage} target=".blank">
                <FiExternalLink />
              </a>
            ) : (
              <a
                href="#"
                style={{ cursor: "not-allowed", pointerEvents: "none" }}
              >
                <MdPlayDisabled />
                {/* <FiPlay /> */}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;
