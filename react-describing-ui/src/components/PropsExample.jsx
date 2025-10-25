export default function PropsExample({ title, count }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>Count passed via props: {count}</p>
    </div>
  );
}
