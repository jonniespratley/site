import Layout from '@theme/Layout';
import {projects} from '../data/resume';

export default function Projects(): JSX.Element {
  return (
    <Layout title="Projects" description="Things I've built">
      <main className="container" style={{padding: '2rem 0'}}>
        <h1>Projects</h1>
        <p>Things I've built and contributed to.</p>

        <div className="row">
          {projects.map((project) => (
            <div className="col col--6" key={project.title} style={{marginBottom: '1.5rem'}}>
              <div className="card">
                <div className="card__image">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} />
                  </a>
                </div>
                <div className="card__body">
                  <h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <p>{project.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
