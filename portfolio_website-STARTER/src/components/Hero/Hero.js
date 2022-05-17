import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Portfolio of <br />
        Rebekah McDevitt
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio! Here is where you can view my accomplishments, find my social media accounts and more! <br />
        Some technologies I know / worked with include: JavaScript, JSX, JQuery, MySQL, CSS, HTML, MongoBD, REACT, and others. I would love to help with you or your company with your next project.
      </SectionText>
      
  </LeftSection>
  </Section >
);

export default Hero; 