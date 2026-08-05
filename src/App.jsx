import { useState } from "react";
import "./css/App.css";

function App() {
  const [text, setText] = useState("");

  async function handleGenerate() {
    const response = await fetch("http://localhost:8080/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    const audioBlob = await response.blob();
    console.log(audioBlob);
  }

  return (
    <main>
      <h1>Text-to-Speech</h1>

      <textarea
        id="textInput"
        placeholder="Enter text here..."
        rows={8}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <br />

      <button id="generateButton" onClick={handleGenerate}>
        Generate
      </button>
    </main>
  );
}

export default App;
