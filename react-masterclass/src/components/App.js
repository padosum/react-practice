import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  color: teal;
`;

const Left = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
`;

export default function App() {
  return (
    <Box>
      <h1>Hello React!</h1>
      <Left />
    </Box>
  );
}
