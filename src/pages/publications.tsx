import Layout from '@theme/Layout';
import {publications} from '../data/resume';

export default function Publications(): JSX.Element {
  return (
    <Layout title="Publications" description="Articles and books I've written">
      <main className="container" style={{padding: '2rem 0'}}>
        <h1>Publications</h1>
        <p>Articles and books I've written over the years.</p>

        <div className="row">
          {publications.map((pub) => (
            <div className="col col--6" key={pub.title} style={{marginBottom: '1.5rem'}}>
              <div className="card">
                <div className="card__image">
                  <img src={pub.image} alt={pub.title} />
                </div>
                <div className="card__body">
                  <h3>{pub.url ? (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                  ) : pub.title}</h3>
                  <p style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem'}}>
                    {pub.subtitle} &middot; {pub.date}
                  </p>
                  <p>{pub.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
