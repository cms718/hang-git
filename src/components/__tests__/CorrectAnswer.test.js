import { fireEvent, render, screen } from "@testing-library/react";
import Game from "../Game/Game";

test("congratulates user if correct answer", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "i" });
  fireEvent.keyDown(document, { key: "n" });
  fireEvent.keyDown(document, { key: "t" });
  const message = screen.getByText("Well Done!");
  expect(message).toBeInTheDocument();
});
