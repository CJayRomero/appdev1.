export default function CurlyBraces() {
  const now = new Date();
  const items = ['apple', 'banana', 'cherry'];

  return (
    <div>
      <h4>Curly Braces: JS inside JSX</h4>
      <p>Current year: {now.getFullYear()}</p>
      <p>Number of items: {items.length}</p>
      <ul>
        {items.map((it, idx) => <li key={idx}>{idx + 1}. {it}</li>)}
      </ul>
    </div>
  );
}
/* comment */