import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument(); 
});

it("should load header component with cart items  as zero", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument(); 
});

it("should change ;login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    const logoututton = screen.getByText("LogOut");
    expect(logoututton).toBeInTheDocument();
});


