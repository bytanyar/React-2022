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
        <h2>Career Objective</h2>
        <p>I am a web designing professional and enthusiast. I am pursuing full stack development because I love to learn and because I am passionate about how websites work. I am also an artist by training and disposition and believe this skill helps me to conceptualize websites from theory to realization.</p>
      </div>
      <div className='box'>
        <h2>Career Summary</h2>
        <p>For the last eight years I have successfully advanced from Front End Developer to becoming a Full Stack Developer. While at Clayton Homes, I consistently received coveted ACE awards for high performance, customer satisfaction, and collaboration. At StoragePug, I was nicknamed “eagle eye” Tanya for my attention to detail.</p>
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
    </div>
  );
}

export default Home;