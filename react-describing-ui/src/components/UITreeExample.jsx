function Leaf({ text }) {
  return <li>{text}</li>;
}

function Branch({ title, leaves }) {
  return (
    <section>
      <h5>{title}</h5>
      <ul>
        {leaves.map((l, i) => <Leaf key={i} text={l} />)}
      </ul>
    </section>
  );
}

export default function UITreeExample() {
  const tree = [
    { title: 'Fruits', leaves: ['apple', 'banana'] },
    { title: 'Veggies', leaves: ['carrot', 'lettuce'] }
  ];

  return (
    <div>
      <h4>UI as Tree</h4>
      {tree.map((t, idx) => <Branch key={idx} title={t.title} leaves={t.leaves} />)}
    </div>
  );
}
