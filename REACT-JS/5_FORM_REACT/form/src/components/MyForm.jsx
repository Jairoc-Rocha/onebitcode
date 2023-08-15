import "./MyForm.css";

export default function MyForm() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu nome"
            autoComplete="off"
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
