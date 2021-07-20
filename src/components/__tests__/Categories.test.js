import { render, screen } from "@testing-library/react";
import Categories from "../Categories/Categories";

test("renders 3 buttons with 3 differents levels", () => {
  const mockQuestions = [
    {
      word: "easy",
      level: "easy",
      hint: "see what has changed within files",
    },
    {
      word: "medium",
      level: "medium",
      hint: "see what has changed within files",
    },
    {
      word: "hard",
      level: "hard",
      hint: "see what has changed within files",
    },
  ];
  render(<Categories allQuestions={mockQuestions} />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(3);
});

test("renders 1 button with only 1 questions", () => {
  const mockQuestions = [
    {
      word: "easy",
      level: "easy",
      hint: "see what has changed within files",
    },
  ];
  render(<Categories allQuestions={mockQuestions} />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(1);
});
