import { render, screen } from "@testing-library/react";
import Clothes from "../src/components/Clothes";
import { vi } from "vitest";

describe("Clothes Component", () => {
  it("clothes are displayed", async () => {
    //const user = userEvent.setup()

    const addToCart = vi.fn()
    const clothes = [
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
    const change = vi.fn()
    const addOrSub = vi.fn()

    render(
      <Clothes 
      handleChange={change} 
      addOrSub={addOrSub} 
      clothes={clothes}
      addToCart={addToCart} />
    )

    const btn1 = screen.getAllByRole('button', {name: "ADD TO CART"})
    expect(btn1).toBeDefined()
    const btn2 = screen.getAllByRole('button', {name: "+"})
    expect(btn2).toBeDefined()
    const btn3 = screen.getAllByRole('button', {name: "-"})
    expect(btn3).toBeDefined()
  })
})

