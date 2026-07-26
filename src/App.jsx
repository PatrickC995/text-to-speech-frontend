import "./css/App.css";

function App() {
  return (
    <main>
      <h1>Text-to-Speech</h1>

      <textarea id="textInput" placeholder="Enter text here..." rows={8} />

      <br />

      <button id="generateButton">Generate</button>
    </main>
  );
}

export default App;
