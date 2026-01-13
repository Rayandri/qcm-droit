import { useQuiz } from './hooks';
import { HomeScreen, ResultScreen, FlashcardView, QuizQuestion } from './components';

const App = () => {
  const {
    mode,
    gameQuestions,
    currentQuestionIndex,
    score,
    selectedOption,
    isAnswered,
    showResult,
    showFlashcard,
    shuffledOptions,
    currentQuestion,
    startGame,
    handleOptionClick,
    handleNext,
    handleFlashcardDone,
    resetGame,
  } = useQuiz();

  if (!mode) {
    return <HomeScreen onStartGame={startGame} />;
  }

  if (showResult) {
    return (
      <ResultScreen
        score={score}
        total={gameQuestions.length}
        mode={mode}
        onReset={resetGame}
      />
    );
  }

  if (showFlashcard) {
    return (
      <div className="screen flashcard-screen">
        <FlashcardView onNext={handleFlashcardDone} />
      </div>
    );
  }

  if (!currentQuestion) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <QuizQuestion
      currentQuestion={currentQuestion}
      currentQuestionIndex={currentQuestionIndex}
      total={gameQuestions.length}
      shuffledOptions={shuffledOptions}
      selectedOption={selectedOption}
      isAnswered={isAnswered}
      onOptionClick={handleOptionClick}
      onNext={handleNext}
      onReset={resetGame}
    />
  );
};

export default App;
