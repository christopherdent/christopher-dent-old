import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ColoredLine from './ColoredLine'

const Social = (props) => {

  return (
<React.Fragment>

  <br /><br />
    <div class='container' id='social'>

      <br />
      <SocialIcon url="https://www.linkedin.com/in/christopher-james-dent/" id='blog' style={{ height: 100, width: 100 }} />
      <SocialIcon url="https://www.facebook.com/christopher.j.dent" id='blog' style={{ height: 100, width: 100 }} />
      <SocialIcon url="https://www.youtube.com/channel/UCZBxvf3wO37Ymx-mO8tPwLQ" id='blog' style={{ height: 100, width: 100 }} />
      <SocialIcon url="mailto: christopherdent01@gmail.com" id="blog" style={{ height: 100, width: 100 }} />

      <br />

</div>
<br /><br />

<br /><br />
</React.Fragment>
  )
}
export default Social
