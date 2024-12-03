import { render, screen } from "@testing-library/react";
import Cart from "../src/components/Cart";
import { vi } from "vitest";
import { userEvent } from "@testing-library/user-event";

describe("cart component", () => {
  it("test cart", async () => {
    const cartItems = [
      {
        id: 0,
        title: "Cool Shirt",
        price: "45",
        rating: {
          rate: "4.0",
        },
      },
      {
        id: 1,
        title: "Cool Pant",
        price: "63",
        rating: {
          rate: "4.2",
        },
      }
    ]

    const remove = vi.fn()

    render( <Cart cartItems={cartItems} remove={remove} /> )
    

    const button = screen.getAllByRole("button", {name: "REMOVE"})

    await userEvent.click(button)

    expect(remove).toHaveBeenCalledTimes(2)


  })
})