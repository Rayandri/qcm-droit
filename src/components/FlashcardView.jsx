import { useState, useEffect } from 'react';
import { Lightbulb, BrainCircuit, ChevronRight } from 'lucide-react';
import { FLASHCARDS } from '../data';

export const FlashcardView = ({ onNext }) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(FLASHCARDS[Math.floor(Math.random() * FLASHCARDS.length)]);
  }, []);

  if (!card) return null;

  return (
    <div className="flashcard-view">
      <div className="flashcard-card">
        <div className="flashcard-icon-bg">
          <Lightbulb size={120} />
        </div>
        <div className="flashcard-header">
          <BrainCircuit className="flashcard-brain" />
          <h3>Flashcard Révision</h3>
        </div>
        <h2 className="flashcard-title">{card.title}</h2>
        <ul className="flashcard-list">
          {card.content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={onNext} className="flashcard-continue-btn">
        Continuer le Quiz <ChevronRight size={20} />
      </button>
    </div>
  );
};
