import { RotateCcw, CheckCircle, XCircle, Lightbulb, ChevronRight } from 'lucide-react';

export const QuizQuestion = ({
  currentQuestion,
  currentQuestionIndex,
  total,
  shuffledOptions,
  selectedOption,
  isAnswered,
  onOptionClick,
  onNext,
  onReset,
}) => {
  return (
    <div className="screen quiz-screen">
      <div className="quiz-header">
        <button onClick={onReset} className="btn-icon" aria-label="Reset">
          <RotateCcw size={20} />
        </button>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestionIndex + 1) / total) * 100}%` }}
          />
        </div>
        <span className="progress-label">{currentQuestionIndex + 1}/{total}</span>
      </div>

      <div className="question-card">
        <div className="question-body">
          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="options-list">
            {shuffledOptions.map((option) => {
              let optionClass = 'option-btn';
              if (!isAnswered) {
                optionClass += ' idle';
              } else if (option.id === currentQuestion.correctId) {
                optionClass += ' correct';
              } else if (option.id === selectedOption) {
                optionClass += ' incorrect';
              } else {
                optionClass += ' dimmed';
              }

              return (
                <button
                  key={option.id}
                  disabled={isAnswered}
                  onClick={() => onOptionClick(option.id)}
                  className={optionClass}
                >
                  <span>{option.text}</span>
                  {isAnswered && option.id === currentQuestion.correctId && <CheckCircle className="icon-correct" />}
                  {isAnswered && option.id === selectedOption && option.id !== currentQuestion.correctId && <XCircle className="icon-incorrect" />}
                </button>
              );
            })}
          </div>
        </div>

        {isAnswered && (
          <div className="feedback-section">
            <div className="feedback-content">
              <div className={`feedback-icon ${selectedOption === currentQuestion.correctId ? 'success' : 'info'}`}>
                {selectedOption === currentQuestion.correctId ? <CheckCircle /> : <Lightbulb />}
              </div>
              <div>
                <h4 className={selectedOption === currentQuestion.correctId ? 'text-success' : 'text-info'}>
                  {selectedOption === currentQuestion.correctId ? 'Bonne réponse !' : 'Explication'}
                </h4>
                <p>{currentQuestion.explanation}</p>
              </div>
            </div>

            <div className="feedback-actions">
              <button onClick={onNext} className="btn-primary">
                {currentQuestionIndex < total - 1 ? 'Suivant' : 'Voir les résultats'} <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
