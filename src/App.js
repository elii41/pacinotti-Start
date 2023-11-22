import React from "react";
import styled from "styled-components";
import logo from "./res/logo.svg";

//Dichiarazione Styled Components:

const Container = styled.div``;

const Navbar = styled.div`
 background-color : black
`;

const Logo = styled.img`
  width: 3rem;
  margin: auto;
  margin-left: 0;
  filter: invert(1);
`;
const ElementContent = 



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
