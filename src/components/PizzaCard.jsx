import { React, useState } from "react";
import { Card, Badge, Button, Col } from "react-bootstrap";
import data from "../data.json";

export default function PizzaCard({ toggle }) {
  return data.map((item) => {
    const { id, name, image, desc, price } = item;
    return (
      <Col key={id} xs={3}>
        <Card className="h-100 mt-3 shadow-sm bg-white p-3 ">
          <Card.Img variant="top" src={image} />
          <Card.Body className="d-flex flex-column mb-2 justify-content-between">
            <div className="d-flex  mb-2 justify-content-between">
              <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
              <Badge pill variant="warning">
                Warning
              </Badge>
            </div>
            <Card.Text className="text-secondary">{desc}</Card.Text>
            <Button onClick={() => toggle()}>Order pizza</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}
