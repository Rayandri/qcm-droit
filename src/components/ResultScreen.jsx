import { Award, RotateCcw } from 'lucide-react';

export const ResultScreen = ({ score, total, mode, onReset }) => {
  const percentage = Math.round((score / total) * 100);
  let message = "";
  if (percentage >= 80) message = "Excellent ! Vous êtes prêt.";
  else if (percentage >= 50) message = "Pas mal, mais révisez encore.";
  else message = "Il faut relire le cours d'urgence.";

  return (
    <div className="screen result-screen">
      <div className="result-card">
        <Award size={80} className={percentage >= 50 ? 'trophy-gold' : 'trophy-grey'} />
        <div className="result-title">
          <h2>Résultats</h2>
          <p>Mode: {mode === 'annales' ? 'Annales' : 'Cours'}</p>
        </div>

        <div className="result-score">
          <span className="score-value">{score}</span>
          <span className="score-total">/{total}</span>
        </div>

        <div className={`result-message ${percentage >= 50 ? 'success' : 'failure'}`}>
          {message}
        </div>

        <button onClick={onReset} className="btn-primary full-width">
          <RotateCcw size={20} /> Recommencer
        </button>
      </div>
    </div>
  );
};
