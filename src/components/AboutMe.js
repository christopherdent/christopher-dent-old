import React from 'react';
import LearnMore from './LearnMore'
import { Container, Accordion, Button, CardColumns } from 'react-bootstrap';


const AboutMe = (props) => {

    // {props.aboutMe}  same as sending <AboutTable /> and its props down
  return (

<React.Fragment>
  <Container fluid >
<br /><br />
<h1 id="about" className='heading'>About Me</h1>
<br />
  <CardColumns>
    {props.aboutMe}
  </CardColumns>
<br />
<center>
  <Accordion>
  <Accordion.Toggle as={Button} size="lg" eventKey="0" block>
      <span> -             Click for My Full Bio              - </span>
        </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <LearnMore />
        </Accordion.Collapse>
    </Accordion>
    </center>
<br />
</Container>
</React.Fragment>
  )

}


export default AboutMe
