import Counter from './components/counter';
import Mirror from './components/mirror';
import CountProvider from './context/count';

export default function App() {
  return (
    <CountProvider>
      <div className="App">
        <h1>Context API xD</h1>
        <Counter />
        <hr />
        <Mirror />
      </div>
    </CountProvider>
  );
}
