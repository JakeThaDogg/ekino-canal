import React from 'react';
import styled from 'styled-components';
import Results from '../Results';
import SearchInput from '../SearchInput';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justif-content: center;
    align-items: center;
`

const Search = () => (
    <Wrapper>
        <SearchInput />
        <Results />
    </Wrapper>
);

export default Search;