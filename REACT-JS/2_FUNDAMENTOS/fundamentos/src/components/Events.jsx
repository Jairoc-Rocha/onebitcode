const Events = () => {
  const handleClick = (e) => {
    console.log("Executou");
    console.log(e);
  };

  //   Funções de renderização
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Rrenderizando outra coisa!</h1>;
    }
  };

  //   return 10 > 2 && <p>Carregando....</p>;

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando um evento")}>
          Clique aqui
        </button>
      </div>
      <div>
        <button onClick={handleClick}>Clique aqui - função</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
