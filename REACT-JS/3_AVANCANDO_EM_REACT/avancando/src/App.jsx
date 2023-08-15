import { useState } from "react";
import "./App.css";

// 2 - Imagem em assets
import night from "./assets/night.jpg";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import Data from "./components/Data";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ShowUserName from "./components/ShowUserName";
import Message from "./components/Message";
import ChangeMessagem from "./components/ChangeMessagem";

function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  function showMessage() {
    console.log("Evento do componente pai");
  }

  return (
    <div style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="imagem da rua" />
      <img src={night} alt="imagem da noite" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderização de lista */}
      <ListRender />
      {/*  7 - render condicional  */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Jairo" />
      {/* chidren */}
      <Container>
        <p>alguma coisa</p>
        <h2>teste</h2>
        <p>meu container</p>
      </Container>
      {/* 14 função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessagem handleNewMessage={handleMessage} />
    </div>
  );
}

export default App;
