import { fireEvent, render, screen } from "@testing-library/react";
import Game from "../Game/Game";

test("reset button when out of lives", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "i" });
  fireEvent.keyDown(document, { key: "n" });
  fireEvent.keyDown(document, { key: "t" });
  fireEvent.click(screen.getByText("Next Question"));

  fireEvent.keyDown(document, { key: "s" });
  fireEvent.keyDown(document, { key: "t" });
  fireEvent.keyDown(document, { key: "a" });
  fireEvent.keyDown(document, { key: "u" });
  fireEvent.click(screen.getByText("Next Question"));

  fireEvent.keyDown(document, { key: "p" });
  fireEvent.keyDown(document, { key: "u" });
  fireEvent.keyDown(document, { key: "l" });
  fireEvent.click(screen.getByText("Next Question"));

  fireEvent.keyDown(document, { key: "d" });
  fireEvent.keyDown(document, { key: "i" });
  fireEvent.keyDown(document, { key: "f" });

  const submitScore = screen.queryByText("Submit Score");
  expect(submitScore).toBeInTheDocument();
});
