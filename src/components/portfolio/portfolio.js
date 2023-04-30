import React, { useState, useEffect } from "react";
import Github from "./github";
import "./portfolio.css";

// const singleUser = `https://api.github.com/users/nashhabibon`;
// const repo = `https://api.github.com/users/nashhabibon/repos?per_page=6`;

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [users] = useState("nashhabibon");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${users}/repos?page=1&per_page=6&sort=updated`
        );
        const data = await res.json();
        const sortedData = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setItems(sortedData);

        // Fetch language data for each repository and calculate total bytes of code for each language
        const newLanguages = await Promise.all(
          sortedData.map((repo) =>
            fetch(repo.languages_url).then((res) => res.json())
          )
        );
        const languageData = newLanguages.map((lang) => Object.keys(lang));

        setLanguages(languageData);
        console.log(languageData);
      } catch (error) {
        setError(error);
      }
    };

    fetchRepos();
  }, []);

  if (!error) {
    return (
      <section className="portfolio section" id="portfolio">
        <div className="container_title">
          <h2 className="section_title">Project</h2>
          <span className="section_subtitle"> Featured Project</span>
        </div>
        <div className="container grid">
          {items.length ? (
            <>
              <span>Latest projects inside {users}'s' Github repository</span>
              <div className="projects_container">
                {items.map((item, index) => (
                  <Github
                    key={item.id}
                    {...item}
                    languages={languages[index]}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="projects_card">
              <div className="projects_card_image"></div>
              <div className="project_card_description">
                <a href="#" target="blank">
                  <span className="title">title</span>
                </a>
                <span className="project_created_date">dated created</span>
                <br />
                <p> description</p>
              </div>
              <div className="projects_card_footer">
                <span className="projects_language"> programming language</span>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } else {
    return <div> error : {error.message}</div>;
  }
};

export default Portfolio;
