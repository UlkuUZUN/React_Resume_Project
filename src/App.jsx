import { useState } from 'react';

import { EXPERIENCES } from './data.js';
import { EXAMPLES } from './data.js';

import Header from './components/Header/Header.jsx';
import Experience from './components/Experience.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [selectedSkill, setSelectedSkill] = useState();

  function handleSelect(selectedButton) {   
    setSelectedSkill(selectedButton);   
  }

  let tabContent = <p> To see details please select a skills.</p>;

  if (selectedSkill) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedSkill].title}</h3>
        <p>{EXAMPLES[selectedSkill].description}</p>
        <pre>
          <code>{EXAMPLES[selectedSkill].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="experiences">
          <h2>Work Experience</h2>
          <ul>
            {EXPERIENCES.map((experienceItem) => (
              <Experience key={experienceItem.title} {...experienceItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedSkill === 'frontend'}
              onSelect={() => handleSelect('frontend')}
            >
              Frontend
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'backend'}
              onSelect={() => handleSelect('backend')}
            >
              Backend
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'innovation'}
              onSelect={() => handleSelect('innovation')}
            >
              Innovation
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'management'}
              onSelect={() => handleSelect('management')}
            >
              Management
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
