import React from "react";
import { Card, Badge, Button, Container, Row, Col } from "react-bootstrap";
import data from "../data.json";

export default function PizzaCard() {
  return data.map((item) => {
    const { id, name, image, desc, price } = item;
    return (
      <Col key={id} xs={3}>
        <Card className="mt-3 shadow-sm bg-white p-3 ">
          <Card.Img variant="top" src={image} />
          <Card.Body className="d-flex mb-2 justify-content-between">
            {desc}
          </Card.Body>
        </Card>
      </Col>
    );
  });
}
