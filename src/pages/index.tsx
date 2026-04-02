import Layout from '@theme/Layout';
import {profile, skills} from '../data/resume';

function SkillBar({name, level}: {name: string; level: number}) {
  return (
    <div style={{marginBottom: '1rem'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar__fill" style={{width: `${level}%`}} />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description={profile.bio}>
      <header className="hero hero--primary" style={{textAlign: 'center'}}>
        <div className="container">
          <img
            src={profile.image}
            alt={profile.name}
            style={{borderRadius: '50%', width: 150, height: 150, objectFit: 'cover', marginBottom: '1rem'}}
          />
          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__subtitle">{profile.title}</p>
          <p style={{maxWidth: 600, margin: '0 auto'}}>{profile.bio}</p>
        </div>
      </header>

      <main>
        <section style={{padding: '3rem 0'}}>
          <div className="container">
            <h2>Skills</h2>
            <div className="row">
              <div className="col col--8 col--offset-2">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
