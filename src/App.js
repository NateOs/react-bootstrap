import { React, useState } from "react";
import "./styles/App.scss";
import "./styles/bootstrap5.min.css";
import { Container, Row, Col } from "react-bootstrap";
import PizzaCard from "./components/PizzaCard";
import Confirmation from "./components/Confirmation";
import data from "./data.json";

function App() {
  const [ordered, setOrdered] = useState(false);
  const displayInfo = () => {
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3000);
  };
  return (
    <>
      <Container>
        {ordered && <Confirmation toggle={displayInfo}/>}
        <Row className="d-flex flex-row">
          <PizzaCard toggle={displayInfo}/>
        </Row>
      </Container>
    </>
  );
}

export default App;
