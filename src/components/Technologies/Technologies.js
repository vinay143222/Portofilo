import React from 'react';
import { DiFirebase, DiReact, DiNodejs} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I 've worked with  a range of technologies in web development world
      From frontend to backend
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Expreience with <br/> REACT.js HTML CSS BOOTSTRAP </ListParagraph>
        </ListContainer>
      </ListItem>
          <ListItem>
        <DiNodejs size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Expreience with  <br/>NODE.js EXPRESS.js </ListParagraph>
        </ListContainer>
      </ListItem>
          <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>Expreience with <br/> MONGODB </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
