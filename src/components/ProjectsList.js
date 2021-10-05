import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProjectsList = (props) => {

  return (
    
    <div id='projects'>
      <br/><br/><br/>
    <Container fluid>
        <h1 className='heading' >My Projects</h1>
<br />
<p>
<h5 id='desc'>Check out my portfolio projects from my time at Flatiron School below. <strong>Please be patient while they load.</strong> App back-ends are all hosted on Heroku, which puts apps to sleep when they aren't being used.  For apps that require a login, feel free to make one! Or, use demo account with username guest, password guest.</h5>
</p> 
           <CardDeck>
             
             {props.listProjects}
            </CardDeck>
            <br/>
            <h4 className='page-title'>+ this React-based website itself <a id='code' href = "https://github.com/christopherdent/christopher-dent" target="_blank">(code)</a>.  <br/><br/>more coming soon...</h4>
          </Container>
     </div>
   )
 }

export default ProjectsList
