import { render, screen } from "@testing-library/react"
import Clickables from "./Clickables"

describe("Testing Clickables", () => {
    test("Test if Clickables has 'Hello World' text", () => {
        render(<Clickables />)

        const linkElement = screen.findByText(/Hello World!/i)
        expect(linkElement).toBeInTheDocument()
    })
})