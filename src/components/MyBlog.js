import React from 'react';
import AboutTable from './AboutTable'
import LearnMore from './LearnMore'
import ColoredLine from './ColoredLine'
import { Jumbotron, Accordion, Button, Card, CardColumns, Image, Table, Container} from 'react-bootstrap';


const MyBlog = (props) => {
return (

<React.Fragment>
<Container fluid >
<a href = "https://christopher-dent.medium.com/">
<Image id='blog' src="https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/family-blog.jpg" fluid />
<br />
<span className = 'blinking'><h1 className="heading">Read My Blog?</h1></span>
</a>
<br />

</Container>
</React.Fragment>


  )
}


export default MyBlog
