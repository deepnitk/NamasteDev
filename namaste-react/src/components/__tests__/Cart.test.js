import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/CartMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)
it('Should load Restaurant Menu component', async () => {
    await act (async () => 
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ));
    
    const accordianHeader =  screen.getByText("Cake [Eggless] (16)");
    fireEvent.click(accordianHeader);

    const items = screen.getAllByTestId("foodItems");
    expect(items.length).toBe(16);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    expect(addBtns.length).toBe(16);

    //check cart value before adding anything
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    // click on first item
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    //Add another item
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    const cartComponent =  screen.getByText("Cart - (2 items)");
    fireEvent.click(cartComponent);
    
    // render 16 items in res menu and and then added 2 items to cart, so 16 + 2 = 18
    const cartItems = screen.getAllByTestId("foodItems");
    expect(cartItems.length).toBe(18);

    //clear cart
    const clearCart = screen.getByText("Clear Cart");
    fireEvent.click(clearCart);
    // No of items to be removed!
    expect(screen.getAllByTestId("foodItems").length).toBe(16);
    // Your cart must be empty now
    expect(screen.getByText("Your cart is empty! Please add items.")).toBeInTheDocument();
});

it('Should have 16 add buttons for 16 items', async () => {
    await act (async () => 
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
    ));

    const accordianHeader =  screen.getByText("Cake [Eggless] (16)");
    fireEvent.click(accordianHeader);

    const items = screen.getAllByTestId("foodItems");
    expect(items.length).toBe(16);
});