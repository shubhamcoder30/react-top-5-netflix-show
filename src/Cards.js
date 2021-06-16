import React from 'react';
import './style.css';
import { Card } from 'react-bootstrap';
export default function Cards(props) {
  return (
    <>
      <div className="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img className="card_image" variant="top" src={props.imglink} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.cardtext}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link className="button" target="_blank" href={props.link}>
              <h3>Watch Now</h3>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
