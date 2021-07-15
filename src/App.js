import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hint from "./components/Hint/Hint"
import DisplayLives from "./components/DisplayLives";
import HiddenWord from "./components/HiddenWord/HiddenWord.jsx";
import WrongLetters from "./components/WrongLetters/WrongLetters.jsx";

function App() {
  const fakeData = [{ word: "init", hint: "initialise git" }];

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
      <Hint hint={words[0].hint}/>
      <DisplayLives lives={lives} />
      <WrongLetters wrongLetters={wrongLetters} />
      <HiddenWord word={words[0].word} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;
