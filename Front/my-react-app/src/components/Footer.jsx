import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #0056b3;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
`;

const Footer = () => {
  return <FooterContainer>&copy; 2025 Crowdfunding Platform</FooterContainer>;
};

export default Footer;
