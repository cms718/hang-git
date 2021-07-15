import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// export default function WrongLetters({word, guessedLetters}) {
//   const [wrongLetters, setWrongLetters] = useState([]);

//   useEffect(() => {
//     const lastLetter = guessedLetters[guessedLetters.length - 1]
//       if(lastLetter && !word.split("").includes(lastLetter)) {
//         setWrongLetters(wrongLetters.push(lastLetter));
//       }
//   }, [guessedLetters, word])
//   return (
//     <div>
//       <p>{wrongLetters}</p>
//     </div>
//   )
// }