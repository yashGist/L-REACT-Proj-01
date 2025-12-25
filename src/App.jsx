import CoreConcepts from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => {
            return  <CoreConcepts {...conceptItem} />
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>EXAMPLES</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>please select a topic</p>}
          {selectedTopic && (
            <div>
              <h2>{EXAMPLES[selectedTopic].title}</h2>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
