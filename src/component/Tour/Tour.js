import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './Tour.css';

const Tour = ({ tour }) => {
  const { description, title,img } = tour;
  return (
    <Col>
      <Card id="tourCard" className="fadeInLeft" >
        <Card.Img variant="top" style={{height:"250px"}} src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Tour;
