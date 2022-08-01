import { JOBS } from '../inputs/actual-jobs';
import { knowledgeData } from '../inputs/knowledge';

import '../styles/home.css';

function Home() {
  function listKnowledge() {
    const listItems = knowledgeData.map((tech) =>
      <li>{tech}</li>
    );
    return (
      <ul className='knowledge'>{listItems}</ul>
    ); 
  }
  const knowledge = listKnowledge();

  return (
    <div className="container">
      <div className='box'>
        <h2>Objective</h2>
        <p>Seeking a position that will benefit from my strong work ethic and experience in website development as well as grow my abilities and knowledge.</p>
      </div>
      <div className='box'>
        <h2>Knowledge Base</h2>
        {knowledge}
      </div>
      
      <div className='companies'>
      {JOBS.map(job => (
        <div key={job.id} className='box'>
          <h2>{job.company}</h2>
          <h3>{job.title}</h3>
          <h4>{job.start} - {job.end}</h4>
          <ul>
            {job.details.map(detail => (
              <li>{detail}</li>))}
          </ul>
        </div>))}
      </div>
      <div>
        <h2>Education</h2>
        <h3>Coding Dojo - Online Bootcamp</h3>
        <p>Black Belt - MERN Stack</p>

        <h3>Pellissippi State Technical Comminity College, Knoxville, TN</h3>
        <p>Associate of Applied Science Degree in Media Technologies - Web</p>

        <h3>University of Tennessee, Knoxville, TN</h3>
        <p>Completed three years of coursework (Painting/Drawing major)</p>
      </div>
    </div>
  );
}

export default Home;