import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Container from "../src/components/Container"
import { userEvent } from "@testing-library/user-event";

describe("Container Component", () => {
  it("renders the Container component correctly", () => {
    render(
      <MemoryRouter>
        <Container />
      </MemoryRouter>
    );

    const mainHeading = screen.getByRole("heading", { name: /Welcome to CoolClothes!/i });
    const subHeading = screen.getByRole("heading", { name: /CoolClothes is your one-stop destination/i });

    expect(mainHeading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    
    const shopNowLink = screen.getByRole("link", { name: /SHOP NOW/i });
    expect(shopNowLink).toBeInTheDocument();

    expect(shopNowLink).toHaveAttribute("href", "/products");
  });
});
