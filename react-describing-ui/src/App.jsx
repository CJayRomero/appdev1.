import FirstComponent from './components/FirstComponent';
import { Greeting, Farewell } from './components/MultiComponents';
import JSXExample from './components/JSXExample';
import CurlyBraces from './components/CurlyBraces';
import PropsExample from './components/PropsExample';
import Conditional from './components/Conditional';
import MultipleRender from './components/MultipleRender';
import PureComponent from './components/PureComponent';
import UITreeExample from './components/UITreeExample';

export default function App() {
  return (
    <main style={{ padding: 20 }}>
      <h1>React — Describing the UI</h1>

      <FirstComponent />

      <section>
        <h2>Multi components</h2>
        <Greeting name="Feb" />
        <Farewell name="Feb" />
      </section>

      <JSXExample />

      <CurlyBraces />

      <PropsExample title="Configuring with props" count={10} />

      <Conditional isLoggedIn={false} />

      <MultipleRender />

      <PureComponent nums={[1, 2, 3]} />

      <UITreeExample />
    </main>
  );
}
