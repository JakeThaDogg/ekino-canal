import React from 'react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";
import {render, screen } from '@testing-library/react'
import { createMemoryHistory } from "history";
import SearchInput from "..";


describe("Running Test for SearchInput", () => {

    test("Check placeholder in Input", () => {
      render (
        <MemoryRouter>
            <SearchInput />
        </MemoryRouter>
        );
      
      expect(screen.getByPlaceholderText('Start typing to search')).toHaveAttribute('placeholder', 'Start typing to search');
    });
  
    test("renders the Input component", () => {
      render (
        <MemoryRouter>
            <SearchInput />
        </MemoryRouter>
      );
      
      const input = screen.getByPlaceholderText('Start typing to search') as HTMLInputElement
      userEvent.type(input, 'Hello world!')
      expect(input.value).toBe('Hello world!')
    });


    // Can't find a way to get search params in React Router v6
    test.skip("Input and query params are synchronized", () => {
        const history = createMemoryHistory();

        render (
            <MemoryRouter>
                <SearchInput />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText('Start typing to search') as HTMLInputElement

        userEvent.type(input, 'Hello world!');

        const searchParams = new URLSearchParams(history.location.search);
 
        expect(searchParams.get('query')).toBe('Hello world!');
    });
  
  });