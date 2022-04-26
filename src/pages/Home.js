import '../styles/home.css';

function Home() {
  var knowledgeData = [
    "Adobe Creative Suite",
    "Agile/SCRUM",
    "Angular 9",
    "Bootstrap",
    "CSS 3/SCSS",
    "Figma",
    "Gatsby",
    "Git",
    "Git Kraken/Sourcetree",
    "GitHub",
    "HTML 5",
    "HubSpot",
    "JavaScript",
    "Jira",
    "JQuery",
    "JSON",
    "Responsive Web Design",
    "Sketch",
    "Storybook",
    "Team City",
    "Typescript",
    "Zeplin",
    "PC & Macintosh Operating Systems"
  ];
  function listKnowledge() {
    console.log(knowledgeData);
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
    </div>
  );
}

export default Home;