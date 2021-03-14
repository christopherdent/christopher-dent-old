import React from 'react';
import { Card, CardDeck, Container, CardColumns, Col, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const AboutTable = (props) => {
//try to make text wrap around image.  You will use a more generic image as the hero, like the one on godaddy.
  return (
<React.Fragment>

  <Card className="text-center" id='aboutCard'>
    <Card.Header>
      {props.title}
    </Card.Header>
    <Card.Body>
      {props.description}
    </Card.Body>
  </Card>

</React.Fragment>
)
}
export default AboutTable
