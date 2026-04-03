import Layout from '@theme/Layout';
import {workHistory, education, publications, projects} from '../data/resume';

export default function Archive(): JSX.Element {
  return (
    <Layout title="Archive" description="Career history, education, and past work">
      <main className="container" style={{padding: '2rem 0'}}>
        <h1>Archive</h1>
        <p>A comprehensive look at my career, education, and past work.</p>

        <section style={{marginBottom: '3rem'}}>
          <h2>Work History</h2>
          {workHistory.map((job) => (
            <div className="timeline-item" key={`${job.company}-${job.years}`}>
              <h3 style={{marginBottom: '0.25rem'}}>{job.title}</h3>
              <p style={{marginBottom: '0.25rem', fontWeight: 600}}>{job.company}</p>
              <p style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
                {job.years}{job.skills ? ` · ${job.skills}` : ''}
              </p>
              <p>{job.description}</p>
            </div>
          ))}
        </section>

        <section style={{marginBottom: '3rem'}}>
          <h2>Education</h2>
          {education.map((edu) => (
            <div className="timeline-item" key={edu.school}>
              <h3 style={{marginBottom: '0.25rem'}}>{edu.school}</h3>
              <p style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem'}}>
                {edu.degree} &middot; {edu.graduated}
              </p>
            </div>
          ))}
        </section>

        <section style={{marginBottom: '3rem'}}>
          <h2>Past Projects</h2>
          <div className="row">
            {projects.map((project) => (
              <div className="col col--4" key={project.title} style={{marginBottom: '1rem'}}>
                <div className="card">
                  <div className="card__body">
                    <h4>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h4>
                    <p style={{fontSize: '0.9rem'}}>{project.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Past Publications</h2>
          <div className="row">
            {publications.map((pub) => (
              <div className="col col--4" key={pub.title} style={{marginBottom: '1rem'}}>
                <div className="card">
                  <div className="card__body">
                    <h4>{pub.url ? (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                    ) : pub.title}</h4>
                    <p style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.85rem'}}>
                      {pub.subtitle} &middot; {pub.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
