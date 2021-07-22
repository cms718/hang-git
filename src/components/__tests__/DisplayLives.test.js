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

test("lives deplete by 1 with each incorrect guess", () => {
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
  fireEvent.keyDown(document, { key: "Q" });
  const head = screen.queryByTestId("head");
  const body = screen.queryByTestId("body");
  expect(head).toBeInTheDocument();
  expect(body).not.toBeInTheDocument();
});

test("Body is displayed", () => {
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  const head = screen.queryByTestId("head");
  const body = screen.queryByTestId("body");
  const arm1 = screen.queryByTestId("arm1");
  expect(head).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(arm1).not.toBeInTheDocument();
});

test("Arm1 is displayed", () => {
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "R" });
  const head = screen.queryByTestId("head");
  const body = screen.queryByTestId("body");
  const arm1 = screen.queryByTestId("arm1");
  const arm2 = screen.queryByTestId("arm2");
  expect(head).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(arm1).toBeInTheDocument();
  expect(arm2).not.toBeInTheDocument();
});

test("Arm2 is displayed", () => {
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  const head = screen.queryByTestId("head");
  const body = screen.queryByTestId("body");
  const arm1 = screen.queryByTestId("arm1");
  const arm2 = screen.queryByTestId("arm2");
  const leg1 = screen.queryByTestId("leg1");
  expect(head).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(arm1).toBeInTheDocument();
  expect(arm2).toBeInTheDocument();
  expect(leg1).not.toBeInTheDocument();
});

test("Leg1 is displayed", () => {
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  fireEvent.keyDown(document, { key: "U" });
  const head = screen.queryByTestId("head");
  const body = screen.queryByTestId("body");
  const arm1 = screen.queryByTestId("arm1");
  const arm2 = screen.queryByTestId("arm2");
  const leg1 = screen.queryByTestId("leg1");
  const leg2 = screen.queryByTestId("leg2");
  expect(head).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(arm1).toBeInTheDocument();
  expect(arm2).toBeInTheDocument();
  expect(leg1).toBeInTheDocument();
  expect(leg2).not.toBeInTheDocument();

});

test("Leg2 is displayed", () => {
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  fireEvent.keyDown(document, { key: "U" });
  fireEvent.keyDown(document, { key: "O" });
  const head = screen.queryByTestId("head");
  const body = screen.queryByTestId("body");
  const arm1 = screen.queryByTestId("arm1");
  const arm2 = screen.queryByTestId("arm2");
  const leg1 = screen.queryByTestId("leg1");
  const leg2 = screen.queryByTestId("leg2");
  expect(head).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(arm1).toBeInTheDocument();
  expect(arm2).toBeInTheDocument();
  expect(leg1).toBeInTheDocument();
  expect(leg2).toBeInTheDocument();
});
