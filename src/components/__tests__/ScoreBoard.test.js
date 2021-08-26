import {render, screen } from "@testing-library/react";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

const fakeScores = [
  {
    name: "test",
    score: 100,
    difficulty: "easy"
  },
  {
    name: "prueba",
    score: 80,
    difficulty: "medium"
  },
  {
    name: "appreuve",
    score: 60,
    difficulty: "hard"
  }
];

test("displays 3 items of userdata as an ordered list", () => {
  render(<ScoreBoard players={fakeScores} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems[0]).toHaveTextContent("TEST");
  expect(listItems[1]).toHaveTextContent("PRUEBA");
  expect(listItems[2]).toHaveTextContent("APPREUVE");
});
