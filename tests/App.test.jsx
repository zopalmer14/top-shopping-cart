
// testing libraries
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// components
import App from '../src/App';

// test App
describe('App', () => {
    // App should render a header section
    it('app should contain a header section', () => {
        render(<App />);

        const header = document.querySelector('header');
        expect(header).toBeInTheDocument();
    });

    // App should render a NavBar 
    it('app should contain a navbar', () => {
        render(<App />);

        const navBar = document.querySelector('.nav-container');
        expect(navBar).toBeInTheDocument();
    });
});