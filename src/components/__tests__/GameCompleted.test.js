import { fireEvent, render, screen } from "@testing-library/react";
import Game from "../Game/Game";

const fakeData = [
  { word: "init", level: "easy", hint: "initialise git" },
  {
    word: "status",
    level: "easy",
    hint: "see which files have changed on your local version since the last commit",
  },
];

beforeEach(() => {
  render(<Game questions={fakeData} />);
});

test("displays submit score button at the end of the game", () => {
  fireEvent.keyDown(document, { key: "i" });
  fireEvent.keyDown(document, { key: "n" });
  fireEvent.keyDown(document, { key: "t" });
  fireEvent.click(screen.getByText("Next Question"));

  const nullButton = screen.queryByText("Submit Score");
  expect(nullButton).toBeNull();
  fireEvent.keyDown(document, { key: "s" });
  fireEvent.keyDown(document, { key: "t" });
  fireEvent.keyDown(document, { key: "a" });
  fireEvent.keyDown(document, { key: "u" });

  const submitScore = screen.queryByText("Submit Score");
  expect(submitScore).toBeInTheDocument();
});
