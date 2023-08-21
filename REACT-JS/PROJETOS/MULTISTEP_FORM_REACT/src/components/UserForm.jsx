const UserForm = ({ data, updateFiledHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
          onChange={(e) => updateFiledHandler("name", e.target.value)}
          value={data.name || ""}
        />
      </div>
      <div className="form-control">
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu email"
          required
          onChange={(e) => updateFiledHandler("email", e.target.value)}
          value={data.email || ""}
        />
      </div>
    </div>
  );
};

export default UserForm;
