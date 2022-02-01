import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import Input from "../../designSystem/Input";

const SearchInput = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [search, setSearch] = useState('');

    useEffect(() => {
        if (!!search) {
            setSearchParams({ query: search });
        } else {
            setSearchParams('');
        }
    }, [search, setSearchParams])

    return (
        <Input type='text' placeholder='Start typing to search' onChange={e => setSearch(e.target.value)} />
    )
}

export default SearchInput;