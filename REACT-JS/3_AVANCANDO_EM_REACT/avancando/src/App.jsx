import "./App.css";

// 2 - Imagem em assets
import night from "./assets/night.jpg";
import Data from "./components/Data";

function App() {
  return (
    <div style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="imagem da rua" />
      <img src={night} alt="imagem da noite" />
      {/* 3 - useState */}
      <Data />
    </div>
  );
}

export default App;
