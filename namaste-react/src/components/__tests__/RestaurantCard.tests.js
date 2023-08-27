import { render, screen } from "@testing-library/react"
import RestuarantCard, {withPromotedLevel} from "../RestaurantCard"
import MOCK_DATA from "../mocks/ResCardMock.json"; 
import MOCK_DATA_PROMOTED from "../mocks/ResCardMockPromoted.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
    render(<RestuarantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with 'promoted Level' Data", () => {
    const RestuarantCardPromoted = withPromotedLevel(RestuarantCard);
    render(<RestuarantCardPromoted resData={MOCK_DATA_PROMOTED}/>);
    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
});