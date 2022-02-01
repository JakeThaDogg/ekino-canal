import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';

const Wrapper = styled.div`
  background: rgb(203,186,249);
  background: radial-gradient(circle, rgba(203,186,249,1) 0%, rgba(4,4,5,1) 61%);
  min-height: 100vh;
  color: #FFF;
  padding: 64px;
`

function App() {
  return (
    <Wrapper className="App">
      <Header />
      <Search />
    </Wrapper>
  );
}

export default App;
