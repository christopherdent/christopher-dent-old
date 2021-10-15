import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SmallProjectsList = (props) => {

  return (
    <React.Fragment>
    <Container fluid >
        <h1 className='heading' id='small-projects'>Small Projects / Challenges</h1>
<br />
<h5 id='desc'>These are a few of my favorite smaller projects/challenges I have completed since graduating from coding school.</h5>
<br/>

           <CardDeck id = 'small-deck'>
             {props.listSmallProjects}
            </CardDeck>
      
            
            <br/>
           
             </Container>
     
     </React.Fragment>
   )
 }

export default SmallProjectsList
