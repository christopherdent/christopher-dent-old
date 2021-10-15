import React from 'react';
import { Card } from 'react-bootstrap';


const ProjectCard = (props) => {

  return (
    <React.Fragment>
      <Card id='project-card' >

            <Card.Img src={props.imageUrl} variant="top" width="600" height="250"/>
            <Card.Body>
              <Card.Title><center>{props.name}</center></Card.Title>
              <Card.Text id='cardText'>{props.description}</Card.Text>
              <center><p><Card.Link href = {props.appUrl} target="_blank">View Live App</Card.Link></p></center>
              
              

              { props.code2 ? <center><p><Card.Link href = {props.codeUrl} target="_blank">View Code</Card.Link></p><p><Card.Link href = {props.code2} target="_blank">View Code (Backend)</Card.Link></p></center> : <center><p><Card.Link href = {props.codeUrl} target="_blank">View Code</Card.Link></p></center> }
            </Card.Body>

        </Card>

</React.Fragment>

  )

}

export default ProjectCard
