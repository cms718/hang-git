import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

// const header = require('../Header/.jsx');
import Notification from "../Notification/Notification";


test("checks if letter has been repeated on a correct letter", () => {
  render(<App />);

  const lives = screen.getByText("6");
  expect(lives).toBeInTheDocument();
  fireEvent.keyDown(document, { key: "i" });
  const letters = screen.getAllByText("_");
  const correctLetters = screen.getAllByText("i");
  expect(letters.length).toBe(2);
  expect(correctLetters.length).toBe(2);
  fireEvent.keyDown(document, { key: "i" });
  const myNotification = screen.getByText(/You have already entered this letter/i);
  expect(myNotification).toBeInTheDocument();

  // expect(lives).toBeInTheDocument("5");

});

// test("checks if letter has been repeated on an in-correct letter", () => {
//   render(<App />);

//   const lives = screen.getByText("6");
//   expect(lives).toBeInTheDocument();
//   fireEvent.keyDown(document, { key: "i" });
//   const letters = screen.getAllByText("_");
//   const correctLetters = screen.getAllByText("i");
//   // expect(letters.length).toBe(2);
//   // expect(correctLetters.length).toBe(2);


//   fireEvent.keyDown(document, { key: "i" });
//   const myNotification = screen.getByText(/You have already entered this letter/i);
//   expect(myNotification).toBeInTheDocument();

//   // expect(lives).toBeInTheDocument("5");

// });