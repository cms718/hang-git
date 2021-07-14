import React, { useState } from "react";
import DisplayLives from "./components/DisplayLives";
import HiddenWord from "./components/HiddenWord.jsx";
import WrongLetters from "./components/WrongLetters/WrongLetters";

function App() {
  const fakeData = [{ word: "init", hint: "How to initialise git" }];

  const [lives, setLives] = useState(6);
  const [words, setWords] = useState(fakeData);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <div>
      <DisplayLives lives={lives} />
      <WrongLetters wrongLetters={wrongLetters} />
      <HiddenWord word={words[0].word} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;
