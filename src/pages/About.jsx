import React from 'react'
import Section1 from './../components/about/Section1';
import Section2 from './../components/about/Section2';
import Section3 from './../components/about/Section3';
import Section4 from '../components/about/Section4';
import Section0 from './../components/about/Section0';

const About = () => {
  return (
    <div>
      <Section0 />
      <div className="relative z-20">
        <Section1 />
      </div>
      <div className=" ">
        <Section2 />
      </div>
      <div className="">
              <Section3 />
            </div>
              <div className=" relative z-40">
                          <Section4 />
                        </div>
    </div>
  )
}

export default About
