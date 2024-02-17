import Calculator from "./components/BodyCalculator/Calculator";
import { Container } from "../src/styles/Global";
import Header from "./components/Heard";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Calculator />
      </Container>
    </>
  );
}

export default App;
