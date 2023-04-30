import { format } from "date-fns";

const Github = (props) => {
  return (
    <div className="projects_card">
      <div className="projects_card_image"></div>
      <div className="project_card_description">
        <a href={props.html_url} target="blank">
          <span className="title">{props.name}</span>
        </a>
        <span className="project_created_date">
          Created {format(new Date(props.created_at), "dd MMMM yyyy")}
        </span>
        <br />
        <p> {props.description}</p>
      </div>
      <div className="projects_card_footer">
        <span className="projects_language">
          {props.languages ? (
            <span className="projects_language">
              {props.languages.map((language, index) => (
                <span key={index}>{language}</span>
              ))}
            </span>
          ) : (
            <span>No languages to display</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Github;
