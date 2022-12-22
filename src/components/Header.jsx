import Container from "react-bootstrap/Container";
import { Navbar, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import { useCards } from "../context/CardContext";

function Header() {
  const {setType} = useCards()

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>WeatherApp</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton onClick={() => setType("C")} id="tbg-radio-1" value={1}>
          Celsius
        </ToggleButton>
        <ToggleButton variant="danger" onClick={() => setType("F")} id="tbg-radio-2" value={2}>
          Fahreinheit
        </ToggleButton>
      </ToggleButtonGroup>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;