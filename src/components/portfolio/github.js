import { format } from "date-fns";
import { FiGithub, FiExternalLink, FiPlay } from "react-icons/fi";

const Github = (props) => {
  const handleClick = () => {
    window.open(props.html_url, "_blank");
  };

  return (
    <div className="projects_card" onClick={handleClick}>
      <div className="projects_card_image">
        {props.socialPreview && props.socialPreview.length > 0 ? (
          <img
            className="social_preview"
            src={props.socialPreview}
            alt={`${props.name} Social Preview`}
          />
        ) : (
          <img className="social_preview" src="" alt="No Social Preview" />
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

          {props.deployments && props.deployments.length > 0 ? (
            <a href={props.html_url} target="blank">
              <FiExternalLink />
            </a>
          ) : (
            <a href={props.html_url} target="blank">
              <FiPlay />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Github;
