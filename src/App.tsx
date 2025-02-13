import QuoteEditor from "./components/QuoteEditor";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <QuoteEditor />
    </ThemeProvider>
  );
}

export default App;
