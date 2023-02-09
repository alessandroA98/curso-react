import './App.css';
import StartScreen from './components/StartScreen';
import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetter] = useState
    ([])
  const [guessedLetters, setGuessedLetter] = useState([])
  const [wrongLetter, setWrongLetter] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)


  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }, [words])

  // starts the secret word game
  const startGame = useCallback(() => {
    // clear all leters 
    clearLetterStates()

    //pick word and pick category
    const { word, category } = pickWordAndCategory()

    //create an array of letters

    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    // fil stages
    setPickedWord(word)
    setPickedCategory(category)
    setLetter(wordLetters)


    setGameStage(stages[1].name);
  }, [pickWordAndCategory])

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    //check if letter has alredy been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetter.includes(normalizedLetter)) {
      return
    }

    //push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetter((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter])
    } else {
      setWrongLetter((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuesses(actualGuesses => actualGuesses - 1)
    }
  }
  const clearLetterStates = () => {
    setWrongLetter([])
    setGuessedLetter([])
  }
  useEffect(() => {
    if (guesses <= 0) {
      //reset all stages
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  //check win condition

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    //win condition
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => (actualScore += 100))

      // restart game with new word
      startGame()
    }

  }, [guessedLetters, letters, startGame])


  // restarts the game
  const retry = () => {
    setScore(0)
    setGuesses(3)
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetter={wrongLetter} guesses={guesses} score={score} />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
