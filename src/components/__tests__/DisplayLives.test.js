import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

test("lives deplete by 1 with each incorrect guess", () => {
  render(<App />);
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "E" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  fireEvent.keyDown(document, { key: "U" });
  const lives = screen.getByText("0");
  expect(lives).toBeInTheDocument();
});


test("Head is displayed", () => {
  render(<App />);
  fireEvent.keyDown(document, { key: "Q" });
  const head = screen.getByTestId("head");
  expect(head).toBeInTheDocument();
});

test("Body is displayed", () => {
  render(<App />);
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  const body = screen.getByTestId("body");
  expect(body).toBeInTheDocument();
});

test("Arm1 is displayed", () => {
  render(<App />);
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "R" });
  const arm1 = screen.getByTestId("arm1");
  expect(arm1).toBeInTheDocument();
});

test("Arm2 is displayed", () => {
  render(<App />);
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  const arm2 = screen.getByTestId("arm2");
  expect(arm2).toBeInTheDocument();
});

test("Leg1 is displayed", () => {
  render(<App />);
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  fireEvent.keyDown(document, { key: "U" });
  const leg1 = screen.getByTestId("leg1");
  expect(leg1).toBeInTheDocument();
});

test("Leg2 is displayed", () => {
  render(<App />);
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  fireEvent.keyDown(document, { key: "U" });
  fireEvent.keyDown(document, { key: "O" });
  const leg2 = screen.getByTestId("leg2");
  expect(leg2).toBeInTheDocument();
});
