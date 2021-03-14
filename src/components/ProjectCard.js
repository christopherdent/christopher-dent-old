import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck, Container, CardColumns, Col, Row } from 'react-bootstrap';


const ProjectCard = (props) => {

  return (
    <React.Fragment>
      <Card>

            <Card.Img src={props.imageUrl} variant="top" />
            <Card.Body>
              <Card.Title><center>{props.name}</center></Card.Title>
              <Card.Text id='cardText'>{props.description}</Card.Text>
              <center><p><Card.Link href = {props.demoUrl}>View Demo</Card.Link></p></center>
              <center><p><Card.Link href = {props.appUrl}>View Live App</Card.Link></p></center>
            </Card.Body>

        </Card>

</React.Fragment>

  )

}

export default ProjectCard
