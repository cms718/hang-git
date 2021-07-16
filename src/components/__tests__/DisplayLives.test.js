import { fireEvent, render, screen } from "@testing-library/react";
import Game from "../Game/Game";

test("lives deplete by 1 with each incorrect guess", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "E" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  fireEvent.keyDown(document, { key: "U" });
  const lives = screen.getByText("0");
  expect(lives).toBeInTheDocument();
});
