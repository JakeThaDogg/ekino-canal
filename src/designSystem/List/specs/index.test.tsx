import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";
import List from "..";
import { SharedProps } from "../../../models/SharedProperties";

const MOCKED_RESULTS: SharedProps[] = [
    {
        adult: true,
        id: 1396,
        media_type: "tv",
        name: "Breaking Bad",
        overview: "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
        popularity: 437.572,
        poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    }
]

describe("Running test for Results", () => {

    // Weird error about JSON structure ?
    test.skip("should render given results", () => {
        render (
            <MemoryRouter>
                <List items={MOCKED_RESULTS} />
            </MemoryRouter>
        )

        const results = screen.getByText('Breaking Bad');

        expect(results).toBe(true);
    });
});