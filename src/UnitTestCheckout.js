import { fireEvent, render, screen } from "@testing-library/react";
import Checkout from "./path/to/Checkout";

describe("Checkout", () => {
  test("renders checkout form", () => {
    render(<Checkout />);
    expect(screen.getByPlaceholderText(/Name/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Address/)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Credit Card Number/)
    ).toBeInTheDocument();
  });

  test("allows form field updates", () => {
    render(<Checkout />);
    fireEvent.change(screen.getByPlaceholderText(/Name/), {
      target: { value: "John Doe" },
    });
    expect(screen.getByPlaceholderText(/Name/).value).toBe("John Doe");
  });

  test("shows total amount from cart items", () => {
    render(<Checkout />);
  });
});
