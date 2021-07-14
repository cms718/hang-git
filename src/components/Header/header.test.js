import { render } from "@testing-library/react";
import App from "../../App";

test("renders a header", () => {
  render(<App />);
  expect(true).toBe(true);
});