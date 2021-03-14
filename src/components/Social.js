import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ColoredLine from './ColoredLine'
import Container from 'react-bootstrap/Container'


const Social = (props) => {

  return (
<React.Fragment>
  <Container fluid id='social'>
  <br /><br />
<div id='icon-continer'>

      <br />
      <SocialIcon url="https://www.linkedin.com/in/christopher-james-dent/" id='blog' style={{ height: 100, width: 100 }} />
      <SocialIcon url="https://www.facebook.com/christopher.j.dent" id='blog' style={{ height: 100, width: 100 }} />
      <SocialIcon url="https://www.youtube.com/channel/UCZBxvf3wO37Ymx-mO8tPwLQ" id='blog' style={{ height: 100, width: 100 }} />
      <SocialIcon url="https://github.com/christopherdent" id='blog' style={{ height: 100, width: 100 }} />
      <SocialIcon url="mailto: christopherdent01@gmail.com" id="blog" style={{ height: 100, width: 100 }} />

      <br />


<br /><br />

<br /><br />
</div>
  </Container>
</React.Fragment>
  )
}
export default Social
