import React from 'react';
import { useEffect } from 'react';
import profileImgServices from '../images/jaque_contact_profile.png';
import listIcon from '../images/arrow_links.png';
import autoCAD from '../images/AutoCAD-logo.png';
import SketchUp from '../images/sketchup.png'
import VRay from '../images/v-ray.png';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Services() {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, []);

    return (
        
        <div class="services-wrapper">

        {/* PROFILE PHOTO */}
        <div class="services-profile" data-aos="fade-right">
            <img src={profileImgServices} alt= "headshot of architect Jaqueline Lima" />
        </div>

        {/* SERVICES DESCRIPTION */}
            <div class="services-description" data-aos="fade-left">
                <h1 data-aos="fade-left">Services</h1>
                <h3>I'm ready to partner with you 🫱🏻‍🫲🏼</h3>
                
                <div style={{display: "flex", gap: "30px", flexWrap: "wrap"}}>
                <ul> 
                    <li><img src={listIcon} />3D Design</li>
                    <li><img src={listIcon} />Architecture</li>
                    <li><img src={listIcon} />Landscape Design</li>
                    <li><img src={listIcon} />Interior Design</li>
                </ul>

                <ul>
                    <li><img src={autoCAD} />AutoCAD</li>
                    <li><img src={SketchUp} />SketchUp</li>
                    <li><img src={VRay} />V-Ray</li>
                </ul>
                </div>
            </div>

        </div>
    )
}