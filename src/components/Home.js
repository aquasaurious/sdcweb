import React, { Component } from 'react';

import iheartsleep from '../img/iheartsleep.png';
import medicare from '../img/logo_medicare.gif';
import medicaid from '../img/medicaid-logo.jpg';
import cigna from '../img/cigna-logo.png';
import selecthealth from '../img/SelectHealth_logo.jpg';
import bcbs from '../img/blue-cross-blue-shield-logo-vector.png';
import pehp from '../img/PEHPLogo.png';

class Home extends Component {
  render() {
    return (
<div id="page-body">
<section id="banner" class="banner">
    <div class="banner-content">
        <h1 id="about-name">Rest Easy</h1>
    </div>
</section>

<section class="first-feature" id="services">
    <div class="services-text">
        <h1>
        Services We Offer:
    </h1>
    <ul>
        <li>
            Evaluation and treatment for all types of sleep disorders
        </li>
        <li>
            Sleep studies, including for those applying for CDL licenses
        </li>
        <li>
            Fitting and maintenance of CPAP equipment and supplies
        </li>
        <li>
            Weight managment and assistance with weight loss
        </li>
        <li>
            Smoking cessation assistance
        </li>
        <li>
            Lifestyle transformation counseling
        </li>
    </ul>
    </div>



</section>

<section class="second-feature" id="mission">
    <div class="mission-text">
        <h1>
            Our Mission:
        </h1>
        <div>
            Provide high quality compassionate care to enhance health and wellness.
        </div>
        <hr />
    
        <h2>
            Our Values:
        </h2>
        <div>
            <ul>
                <li>
                    Honesty: We provide quality care, and transparency in our treatment plans.
                </li>
                <li>
                    Integrity: We provide service within the framework of a moral code, compliance with standards of patient privacy, and in harmony with our professional recommendations for care.
                </li>
                <li>
                    Respect: We treat all patients with equality, care, and concern for privacy.
                </li>
            </ul>
        </div>
    </div>
</section>

<section class="third-feature" id="insurance">
    <ul class="insurers">
        <img src={medicare} alt="medicare"/>
        <img src={medicaid} alt="medicaid"/>
        <img src={bcbs} alt="blue cross"/>
        <img src={cigna} alt="cigna"/>
        <img src={pehp} alt="pehp"/>
        <img src={selecthealth} alt="select health"/>
    </ul>

</section>

<section id="contact" class="contact">
    
</section>
</div>
);
  }
}

export default Home;
