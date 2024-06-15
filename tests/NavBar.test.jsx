
// testing libraries
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

// components
import NavBar from '../src/NavBar';

// test NavBar
describe('NavBar', () => {
    // test rendering of navbar 
    it('should render a navbar', () => {
        const onClick = vi.fn();
        render(<NavBar title="test" links={['home', 'shop', 'cart']} onClick={onClick} />);

        const navBar = document.querySelector('.nav-container');
        expect(navBar).toBeInTheDocument();
    });

    // navbar should render a h2 heading
    it('navbar should render a h2 heading', () => {
        const onClick = vi.fn();
        render(<NavBar title="test" links={['home', 'shop', 'cart']} onClick={onClick} />);

        const heading = screen.getByRole('heading', {level: 2});
        expect(heading).toBeInTheDocument();
    });

    // h2 heading should have the appropriate text/title
    it('navbar h2 heading should have the appropriate text/title', () => {
        const onClick = vi.fn();
        render(<NavBar title="test" links={['home', 'shop', 'cart']} onClick={onClick} />);

        const heading = screen.getByRole('heading', {level: 2});
        expect(heading).toHaveTextContent('test')
    });

    // navbar should contain a nav section
    it('navbar should render a nav section', () => {
        const onClick = vi.fn();
        render(<NavBar title="test" links={['home', 'shop', 'cart']} onClick={onClick} />);

        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });

    // when a navbar button is clicked, the onClick function should be called
    it('onClick function should be called when a navbar button is clicked', async () => {
        const user = userEvent.setup()
        const onClick = vi.fn();
        render(<NavBar title="test" links={['home', 'shop', 'cart']} onClick={onClick} />);

        const button = screen.getByRole("button", { name: "home" });
        await user.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});