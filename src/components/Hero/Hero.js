import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to  <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose  of this website is to showcase my skill  what i am good at
        </SectionText>
         <a href="https://google.com"><Button>Learn More</Button></a>
        <a href="CV..pdf" download="CV..pdf"> <Button>Resume</Button></a>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;