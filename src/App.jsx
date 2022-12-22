import Header from "./components/Header"
import FormCard from "./components/FormCard"
import { Container } from "react-bootstrap"
import CardsProvider from "./context/CardContext"


function App() {
  return (
    <CardsProvider>
      <Header/>
      <Container>
        <FormCard/>
      </Container>  
    </CardsProvider>
  )
}

export default App;
