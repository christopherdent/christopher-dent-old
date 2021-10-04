import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SmallProjectsList = (props) => {

  return (
    <React.Fragment>
    <Container fluid >
        <h1 className='heading' id='projects'>Small Projects / Challenges</h1>
<br />
<p id='desc'>These are a few of my favorite smaller projects/challenges I have completed since graduating from coding school.</p>
<center>

           <CardDeck>
             {props.listSmallProjects}
            </CardDeck>
      
            
            <br/>
            </center>
             </Container>
     
     </React.Fragment>
   )
 }

export default SmallProjectsList
