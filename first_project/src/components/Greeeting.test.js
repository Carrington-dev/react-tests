import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test("Testing my greeting", () => {
    render(<Greeting />)
    const linkElement = screen.getByText(/Hi Sir/i)
    expect(linkElement).toBeInTheDocument()
})

test("Testing my greeting second", () => {
    render(<Greeting title='Good Morning' />)
    const linkElement = screen.getByText(/Good Morning/i)
    expect(linkElement).toBeInTheDocument()
})

test("Testing my greeting message", () => {
    render(<Greeting  />)
    const linkElement = screen.getByText("How are you?")
    expect(linkElement).toBeInTheDocument()
})

test("Testing greeting dynamically", () => {
    render(<Greeting message='I hope you had a good night.' />)
    const linkElement = screen.getByText("I hope you had a good night.")
    expect(linkElement).toBeInTheDocument()
})