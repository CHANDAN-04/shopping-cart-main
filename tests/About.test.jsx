import About from "../src/components/About"
import { render } from "@testing-library/react"

describe("About Component", () => {
  it("renders the about component correctly", () => {
    const { container, getByText, getByRole } = render(<About />);
    expect(container).toMatchSnapshot()

    const mainHeading = getByText("This is a fictional store and none of the products displayed here exist.");
    expect(mainHeading).toBeInTheDocument();

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBe(2); 

    
    const githubLink = getByText("darshan019:");
    expect(githubLink).toBeInTheDocument();
    
    
    const linkElement = getByRole('link', { name: /Github/i });
    expect(linkElement).toHaveAttribute("href", "https://github.com/darshan019");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });
});