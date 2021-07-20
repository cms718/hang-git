import { fireEvent, render, screen } from "@testing-library/react";
import Game from "../Game/Game";

const fakeData = [{ word: "a b", level: "easy", hint: "a and b with a space" }];

test("words with spaces don't require the user to enter space", () => {
  render(<Game questions={fakeData} />);
  fireEvent.keyDown(document, { key: "a" });
  fireEvent.keyDown(document, { key: "b" });
  const wellDoneMsg = screen.getByText("Finished!");
  expect(wellDoneMsg).toBeInTheDocument();
});
