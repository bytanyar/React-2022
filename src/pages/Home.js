import knowledgeData from '../inputs/knowledge';

import '../styles/home.css';

function Home() {
  function listKnowledge() {
    const listItems = knowledgeData.map((tech) =>
      <li>{tech}</li>
    );
    return (
      <ul>{listItems}</ul>
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
        {knowledge}
      </div>
    </div>
  );
}

export default Home;