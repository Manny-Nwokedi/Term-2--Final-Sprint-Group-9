import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/pages/ProductDetails";
import ProductList from "./components/pages/ProductList";

// product page render

test("Products Page", async () => {
  render(
    <MemoryRouter initialEntries={["/list"]}>
      <Routes>
        <Route path="/list" element={<ProductList />}></Route>
      </Routes>
    </MemoryRouter>
  );
  await waitFor(() => expect(screen.getByText("Product 1")));
  expect(screen.getByText("Product 1")).toBeInTheDocument();
});

// getting item for  product details page
test("Display ", async () => {
  render(
    <MemoryRouter initialEntries={["/product/1"]}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
    </MemoryRouter>
  );
  await waitFor(() => expect(screen.getByText("Product 1")));
  expect(screen.getByText("Product 1")).toBeInTheDocument();
});
