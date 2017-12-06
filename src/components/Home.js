import React, { Component } from 'react';

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
<img src="ihearsleep.png" alt="heart-bed"/>
    <ul class="insurers">
        <li><img src="../img/logo_medicare.gif" alt="medicare"/></li>
        <li><img src="../img/medicaid-logo.jpg" alt="medicaid"/></li>
        <li><img src="../img/blue-cross-blue-shield-logo-vector.png" alt="blue cross"/></li>
        <li><img src="../img/cigna-logo.png" alt="cigna"/></li>
        <li><img src="../img/PEHPlogo.png" alt="pehp"/></li>
        <li><img src="../img/SelectHealth_logo.jpg" alt="select health"/></li>
    </ul>

</section>

<section id="contact" class="contact">
    
</section>
</div>
);
  }
}

export default Home;
