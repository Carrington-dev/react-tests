// We want to group tests together

import { render, screen } from "@testing-library/react"
import InputField from "./InputField"

describe("Testing InputField Component", () => {
    
    test("Testing input placeholders", () => {
        render( <InputField 
                type="email" 
                placeholder="Enter your email"
                />)
        const linkElement = screen.getByPlaceholderText("Enter your email")
        expect(linkElement).toBeInTheDocument()
    })
    
    test("Testing input types", () => {
        render( <InputField 
                type="email" 
                placeholder="Enter your email"
                defaultValue="email"
                />)
        const linkElement = screen.getByDisplayValue("email")
        expect(linkElement).toBeInTheDocument()
    })
})
