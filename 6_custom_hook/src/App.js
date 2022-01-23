import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import background from './assets/background.jpg';

const Root = styled.div`
  height: 100vh;
  background: url(${background}) no-repeat center center fixed; 
`;

function App() {
  return (
    <Root>
      <Form />
    </Root>
  );
}

export default App;
