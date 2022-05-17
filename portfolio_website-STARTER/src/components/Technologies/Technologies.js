import React from 'react';
import { DiCode, DiFirebase, DiHeroku, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with many front and back end technologies in web development. I specifically have worked with the MERN tech stack. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, CSS, HTML, Bootstrap, Materialize
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript, Node.js and MYSQL, Sequalize, MongoDB, Express.js
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="4rem" />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Experience with <br />
            Github, Heroku, Restful APIs, 
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
