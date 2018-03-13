import React, { Component } from 'react';

import mike from '../img/mike1.jpg';
import jean from '../img/jean.png';
import will from '../img/will.jpg';

class About extends Component {
    render() {
      return (
      
          <div>
<section id="banner" class="banner">
    <div class="banner-content">
        <h1 id="about-name">Rest Easy</h1>
    </div>
</section>

<section id="staff" class="first-feature">
    <div class="services-text">
        <h1>
        Our Staff
    </h1>
    <ul>
        <li>
            <h3>M. Jean Walker, DNP</h3>
            <div class="staff-profile"><img class="staff-photo" src={jean} alt="Jean"/>
            <p>She has 18 years of experience as an NP and 30 years of experience as an RN. She loves working with our patients.</p></div>
        </li>
        <li>
            <h3>Michael Treacy, Registered Nurse</h3>
            <div class="staff-profile"><img class="staff-photo" src={mike} alt="Mike"/>
            <p>Mike has 20 years of experience in Sleep Medicine, helping patients with the studies, CPAP machines and supplies.  We value his knowledge and skills.</p></div>
        </li>
        <li>
            <h3>Rodolfo M Ferrate, MD</h3>
            <div class="staff-profile"><img class="staff-photo" src="" alt="Dr. Ferrate" />
            <p>Dr. Ferrate is our Medical Director.   He interprets the studies. and advises patients in the clinic. He is Board Certified in Sleep Medicine.</p></div>
        </li>
        <li>
            <h3>William Moreno</h3>
            <div class="staff-profile"><img class="staff-photo" src={will} alt="Will"/>
            <p>Will is a warm and friendly person.  He helps with mask fittings,  scheduling,  He loves working with our patients and helping them improve their health.</p></div>
        </li>
        <li>
            <h3>Ashley Lloret, Registered Sleep Technician</h3>
            <div class="staff-profile"><img class="staff-photo" src="" alt="Ash" />
            <p>Ashley is a caring and competent  technician.  She loves working with our patients.</p></div>
        </li>
    </ul>
    </div>



</section>

<section id="second-feature" class="location">

</section>

<section id="third-feature" class="history">

</section>

</div>
      
      );
    }
  }
  
  export default About;
  