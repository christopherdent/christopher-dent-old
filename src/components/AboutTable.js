import React from 'react';

import { Table } from 'react-bootstrap';

const AboutTable = (props) => {
//try to make text wrap around image.  You will use a more generic image as the hero, like the one on godaddy.
  return (
<Table responsive>
  <thead>
    <tr>
      <th className='heading'>My Experience</th>
      <th className='heading'>My Skillset</th>
      <th className='heading'>My Goals</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td id='cellOne'><p>I graduated from college having majored in political science and history (double major) at McGill University in Montreal, Canada.  I've been working in project management pretty much ever since (approx. 12 years experience) while learning code in my free time.</p></td>
      <td id="cellTwo"><p>I possess a sharp eye for detail, which I use to find even the smallest errors in my code (usually!)  I work well under pressure and can produce high-quality work in short periods of time.</p><p>I have strong interpersonal skills and work with a wide variety of people in a wide variety of regions (Canada, Scotland, Washington DC, etc.) </p></td>
      <td id="cellThree"><p>I am looking  for any and all opportunities to put my coding skills to good use.  I'm fascinated with the concept of creating something from nothing and hope that it can become more than just a hobby someday. </p></td>
    </tr>
  </tbody>
</Table>
)
}
export default AboutTable
