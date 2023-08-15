const ChangeMessagem = ({ handleNewMessage }) => {
  const messages = ["Oi", "Olá", "Tudo bem?"];
  return (
    <div>
      <button onClick={() => handleNewMessage(messages[0])}>1</button>
      <button onClick={() => handleNewMessage(messages[1])}>2</button>
      <button onClick={() => handleNewMessage(messages[2])}>3</button>
    </div>
  );
};

export default ChangeMessagem;
