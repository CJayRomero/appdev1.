// BAD: mutating props or global data inside render is not pure.
// GOOD: compute derived values and return JSX without side effects.

export default function PureComponent({ nums }) {
  // no mutation to nums; create derived value instead
  const doubled = nums.map(n => n * 2);
  return (
    <div>
      <h4>Pure Component</h4>
      <p>Input: {nums.join(', ')}</p>
      <p>Doubled: {doubled.join(', ')}</p>
    </div>
  );
}
