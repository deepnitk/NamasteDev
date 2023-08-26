import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//Grouping tests
describe("Contact US page Test Case", () => {
    it("should load contact us component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    } );
    
    it("should load button inside contact us componernt", () => {
        render(<Contact/>);
        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();
    });
    
    it("should load Submit text contact us componernt", () => {
        render(<Contact/>);
        const submitButton = screen.getByText("Submit");
        expect(submitButton).toBeInTheDocument();
    });
    
    it("should load Submit text contact us componernt", () => {
        render(<Contact/>);
        const submitButton = screen.getByText("Submit");
        expect(submitButton).toBeInTheDocument();
    });
    
    it("Should load input name inside contact component", () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load two input box inside contact component", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes);
        expect(inputBoxes.length).toBe(2);
    });
})