import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});
it("Should search res list for Burger text input", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        );
    });
    const initialResCard = screen.getAllByTestId("resCard");
    expect(initialResCard.length).toBe(20);

    const searchButton = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger"}});
    fireEvent.click(searchButton);
    
    //expect Burger King to be as a search result
    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(1);
})