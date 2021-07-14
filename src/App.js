import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import DisplayLives from "./components/DisplayLives/DisplayLives";
import HiddenWord from "./components/HiddenWord/HiddenWord.jsx";
import WrongLetters from "./components/WrongLetters";

function App() {
  const fakeData = [{ word: "init", hint: "How to initialise git" }];

  const [lives, setLives] = useState(6);
  const [words, setWords] = useState(fakeData);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const handleKeyPress = useCallback(
    ({ key }) => {
      const guessedLettersCopy = [...guessedLetters];
      guessedLettersCopy.push(key);
      setGuessedLetters(guessedLettersCopy);
    },
    [guessedLetters]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <Header />
      <DisplayLives lives={lives} />
      <WrongLetters wrongLetters={wrongLetters} />
      <HiddenWord word={words[0].word} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;
