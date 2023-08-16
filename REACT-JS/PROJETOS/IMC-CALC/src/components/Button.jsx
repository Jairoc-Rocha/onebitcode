import "./Button.css";

export default function Button({ id, text, action }) {
  const handleAction = (e) => {
    action(e);
  };
  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  );
}
