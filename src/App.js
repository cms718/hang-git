import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import DisplayLives from "./components/DisplayLives/DisplayLives";
import Hint from "./components/Hint/Hint";
import HiddenWord from "./components/HiddenWord/HiddenWord.jsx";
import WrongLetters from "./components/WrongLetters/WrongLetters.jsx";
import RoundCompleted from "./components/RoundCompleted/RoundCompleted";

function App() {
  const fakeData = [{ word: "init", hint: "initialise git" }];

  const [words, setWords] = useState(fakeData);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [lives, setLives] = useState(6);
  const [inProgress, setInProgress] = useState(true);

  const handleKeyPress = useCallback(
    ({ key }) => {
      if (!guessedLetters.includes(key)) {
        const guessedLettersCopy = [...guessedLetters];
        guessedLettersCopy.push(key);
        setGuessedLetters(guessedLettersCopy);
      }
    },
    [guessedLetters]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const resetGame = () => {
    setLives(6);
    setGuessedLetters([]);
    setInProgress(true);
  };

  const updateInProgress = (bool) => {
    setInProgress(bool);
  };

  return (
    <div>
      <Header />
      <DisplayLives
        word={words[0].word}
        guessedLetters={guessedLetters}
        lives={lives}
        updateLives={setLives}
      />
      <Hint hint={words[0].hint} />
      <WrongLetters wrongLetters={wrongLetters} />
      <HiddenWord
        word={words[0].word}
        guessedLetters={guessedLetters}
        inProgess={inProgress}
      />
      <RoundCompleted
        lives={lives}
        resetGame={resetGame}
        updateInProgress={updateInProgress}
      />
    </div>
  );
}

export default App;
