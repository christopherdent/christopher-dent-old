import React from 'react';
import { Card } from 'react-bootstrap';


const AboutTable = (props) => {
//try to make text wrap around image.  You will use a more generic image as the hero, like the one on godaddy.
  return (
<div>
<br/><br/><br/>
  <Card className="text-center" id='aboutCard'>
    <Card.Header>
      {props.title}
    </Card.Header>
    <Card.Body>
      {props.description}
    </Card.Body>
  </Card>

</div>
)
}
export default AboutTable
