import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

test("renders scoreboard when submit score clicked", () => {
  render(<App />);
  fireEvent.click(screen.getByText("easy"));
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
  fireEvent.click(screen.getByText("Next Question"));

  fireEvent.keyDown(document, { key: "p" });
  fireEvent.keyDown(document, { key: "u" });
  fireEvent.keyDown(document, { key: "s" });
  fireEvent.keyDown(document, { key: "h" });
  fireEvent.click(screen.getByText("Submit Score"));

  const highScores = screen.getByText("High Scores");
  expect(highScores).toBeInTheDocument();
  fireEvent.click(screen.getByText("Back"));

  const homePage = screen.getByText("Play Game");
  expect(homePage).toBeInTheDocument();
});
