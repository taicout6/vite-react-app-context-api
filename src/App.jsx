import ThemeProvider from './context/Theme';
import CountProvider from './context/count';
import Container from './components/container';
import Counter from './components/counter';
import Mirror from './components/mirror';

export default function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Counter />
          <hr />
          <Mirror />
        </Container>
      </CountProvider>
    </ThemeProvider>
  );
}
