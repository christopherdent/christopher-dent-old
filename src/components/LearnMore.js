import React from 'react';
import { Image, Table } from 'react-bootstrap';

const LearnMore = (props) => {
  return (
<div className="container-fluid content-row" id="about">
<br />
  <h3>About Chris</h3><br/>

<Table>
<tr><td><br />
  <Image src="https://cjdportfolio.s3.amazonaws.com/20210307_182907.jpg" id="us" rounded fluid />
</td>
<td></td>
<td>
     <p className="bio-text">{`My name's Chris and I currently live in St. Augustine, Florida.  I live here with my
       wife, Angelica and our pomeranian Chilito.  I grew up in a house in the woods in Sag Harbor, NY and attended Pierson High School there.  When I finished that I was excited to move away for college and got accepted to McGill University where I studied Political Science with a double major in History.  After briefly returning to Sag Harbor, I got a job at a great company in the DC area and moved there to do it.  After a few years in the DC area (2006 - 2010) I moved to the UK, where my Dad is from.  Over there I worked a contract job as a project analyst at the Royal Bank of Scotland for about a year and then moved on to be an IT Project Officer at the City of Edinburgh Council.  I loved both roles and nearly stayed at the Council for good, but in 2013 I got an offer from my old company in DC that I really couldn't say no to and back I went to DC to a company I'm still with today (working for them remotely from here in St. Augustine)`}.
    </p>
</td>
</tr>
</Table>
    <p className="bio-text">{`
      I had wanted to further my education for years now, just didn't know what to further it with.  After a lot of soul-searching one day it just hit me - get back into tech.
      I say back because when I was a super-nerd teen, an aunt gave me an old Gateway PC - a 386 processor with I think 4MB of RAM (I saved all summer to upgrade it to 8) and
      maybe a 200MB hard dive, if that, and I totally lost myself in it.  First by making liberal use of AOL free trial disks, then joining chat-rooms, to eventually chatting
      about how to build computers (which I did) and finally, how to build software.  The height of this was a text based game (I SO wish I could recover) I wrote on
      C++ based on my middle school pals and distributed to them all on 3.5" floppies.  Good times.  Then, I went to college, majored in something completely unrelated and forgot all about it - something I have been regretting for years.  The choice was clear, I wanted to learn to code.`}
    </p>
    <p className="bio-text"><br />{`
     I spent the last year or so in Flatiron School's Self-Paced Online Coding Bootcamp and graduated in December, 2020 as a full-fledged software engineer.  So welcome to my portfolio site which contains the fruits of my studies in the "My Projects" section above.  I'm working off a Lenovo Y700 dual boot Windows 10/Ubuntu and I can work with Ruby/Rails, Rack/Sinatra, JavaScript, React/Redux and some basic C++, but I'm learning more every day, and the continuous learning truly is my favorite thing about this field.`}
    </p>
    </div>
  )
}

export default LearnMore
