import React from "react";
import styled from "styled-components";
import logo from "./res/logo.svg";

//Dichiarazione Styled Components:

const Container = styled.div``;

const Navbar = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 3rem;
  margin: auto;
  margin-left: 0;
  filter: invert(1);
`;

const ElementContent = styled.h1`
  color: white;
  margoin: auto;
 margin-right: 10px; 
`;

const App = () => {
  return (
    <Container>
      <Navbar>
        <Logo src={logo} />
        <ElementContent>Me</ElementContent>
      </Navbar>
    </Container>
  );
};

export default App;
