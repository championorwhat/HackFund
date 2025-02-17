import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #0056b3;
  color: white;
  border-radius: 5px;
  text-decoration: none;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to Crowdfunding Platform</h1>
      <p>Raise funds for medical emergencies and startups.</p>
      <Button to="/signup">Get Started</Button>
    </HomeContainer>
  );
};

export default Home;
