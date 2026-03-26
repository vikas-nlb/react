import { useState } from "react";
import TabButton from "./TabButton";
import { Examples } from "../data/examples";

export default function ReactDetails() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function onSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p> Please select a button </p>;
  if (selectedTopic) {
    tabContent = (
      <>
        <h2>{Examples[selectedTopic].title}</h2>
        <>
          <p>{Examples[selectedTopic].description}</p>
          <pre>
            <code>{Examples[selectedTopic].code}</code>
          </pre>
        </>
      </>
    );
  }
  return (
    <div className="react_details">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => onSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => onSelect("jsx")}
        >
          Jsx
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => onSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => onSelect("state")}
        >
          State
        </TabButton>
      </menu>
      <div className="tab_content">{tabContent}</div>
    </div>
  );
}
