import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href="tel:+91 9844856566">9844856566</LinkItem>
            <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href="mailto:vinaykumarhmvini@gmail.com">vinaykumarhmvini@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
   
        <CompanyContainer>
          <Slogan>
            WORK HARD FOR WHAT YOU WANT
          </Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
       <SocialIcons href="https://github.com/vinay143222">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vinay-kumar-h-m-vini-172a1219b/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/profile.php?id=100042019992521">
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
