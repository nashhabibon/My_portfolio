import React, { useState, useEffect } from "react";
import Github from "./github";
import "./portfolio.css";

// const singleUser = `https://api.github.com/users/nashhabibon`;
// const repo = `https://api.github.com/users/nashhabibon/repos?per_page=6`;

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [unique, setUnique] = useState([]);
  const [error, setError] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [socialpreview, setSocialpreview] = useState([]);
  const [users] = useState("nashhabibon");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${users}/repos?page=1&per_page=100&sort=updated`
        );
        const data = await res.json();

        //Fetch repo name with * on it's name
        const repositoriesWithPattern = data.filter((repo) =>
          repo.name.startsWith("-")
        );
        setUnique(repositoriesWithPattern);

        //sorteddata
        const sortedData = repositoriesWithPattern.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setItems(sortedData);

        // Fetch language data for each repository
        const newLanguages = await Promise.all(
          sortedData.map((repo) =>
            fetch(repo.languages_url).then((res) => res.json())
          )
        );
        const languageData = newLanguages.map((lang) => Object.keys(lang));
        setLanguages(languageData);

        // Fetch social preview  for each repository
        const getSocialPreview = async (repo) => {
          const response = await fetch(
            `https://api.github.com/repos/${users}/${repo.name}/contents/social_preview.png`
          );
          if (response.ok) {
            const data = await response.json();
            return data.download_url;
          } else {
            return null;
          }
        };
        const socialPreviewData = await Promise.all(
          sortedData.map((repo) => getSocialPreview(repo))
        );
        setSocialpreview(socialPreviewData);
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
              <div className="projects_container">
                {items.map((item, index) => (
                  <Github
                    key={item.id}
                    {...item}
                    languages={languages[index]}
                    socialPreview={socialpreview[index]}
                  />
                ))}
              </div>
              {/* <div className="show_more">
                <button className="btn_show">Show more</button>
              </div> */}
            </>
          ) : (
            <div className="projects_container">
              <div className="projects_card">
                <span>No project to display from github</span>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } else {
    return (
      <section className="portfolio section" id="portfolio">
        <div className="container_title">
          <h2 className="section_title">Project</h2>
          <span className="section_subtitle"> Featured Project</span>
        </div>
        <div className="container grid">
          <div className="projects_card">error : {error.message}</div>
          <span>There's an error on fetchRepos "Error 403"</span>
        </div>
      </section>
    );
  }
};

export default Portfolio;
