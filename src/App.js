import React from "react";

const App = () => {
  return (
    <section className="project-container">
      <div className="title-media">
        <img src="./cyril.jpeg" alt="myself" center />
        <h1>Cyril Salamite</h1>
        <h4>Malaga, Spain</h4>
        <p>"Front-end developer and avid tech"</p>
      </div>
      <ul>
        <li>
          <a
            href="https://github.com/Cyrilange"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.frontendmentor.io/profile/Cyrilange"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cyril-salamite-270270197/?originalSubdomain=es"
            target="_blank"
            rel="noreferrer"
          >
            LinKedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/home?lang=es"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cyrilange13/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </section>
  );
};

export default App;
