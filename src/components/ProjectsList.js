import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';


const ProjectsList = (props) => {

  return (
    <React.Fragment>
    <Container fluid >
        <h1 className='heading' id='projects'>My Projects</h1>
<br />
<p id='desc'>Check out my portfolio projects from my time at Flatiron School below. <strong>Please be patient while they load.</strong> App back-ends are all hosted on Heroku, which puts apps to sleep when they aren't being used so you might to wait a minute or even hit 'refresh' if nothing's happening. Trust me, it's worth the wait. For apps that require a login, feel free to make one! Or, use demo accounts with username guest, password guest.</p>
           <CardDeck>
             {props.listProjects}
            </CardDeck>
            <br/>
            <h4 className='page-title'>more coming soon...</h4>
          </Container>
     </React.Fragment>
   )
 }

export default ProjectsList
