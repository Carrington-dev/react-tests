// We want to group tests together

import { render, screen } from "@testing-library/react"
import InputField from "./InputField"

test("Testing input types", () => {
    render( <InputField 
            type="email" 
            placeholder="Enter your email"
            />)
    const linkElement = screen.getByPlaceholderText("Enter your email")
    expect(linkElement).toBeInTheDocument()
})