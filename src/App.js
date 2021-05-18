import React from 'react';
import './App.css';
import { projects } from './data';
import { AiOutlineProject, AiOutlineGithub } from 'react-icons/ai';

const App = () => {
  return (
    <div className="app">
      <header>
        Milan Pavicevic - projects
      </header>
      <section className="projects">
        <article className="projects__center">
          {projects.map(project => {
            const {name, demo, github, img, description, tech} = project;
            return (
              <div
                key={name}
                className="project">
                <h2>{name} project</h2>
                <div className="project__top">
                  <div className="project__top-img">
                    <img src={img} alt={name}/>
                  </div>
                  <div className="project__top-info">
                    <h3>links</h3>
                    <div className="project__top-info__demo">
                      <AiOutlineProject className="icon" />
                      <a href={demo} target="_blank">demo</a>
                    </div>
                    <div className="project__top-info__github">
                      <AiOutlineGithub className="icon" />
                      <a href={github} target="_blank">github</a>
                    </div>
                  </div>
                </div>
                <div className="project__bottom">
                  <div className="project__bottom-description">
                    <h3>project description</h3>
                    <p>{description}</p>
                  </div>
                  <div className="project__bottom-tech">
                    <h3>technologies used</h3>
                    <p>{tech}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </div>
  );
}

export default App;

