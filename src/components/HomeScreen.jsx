import { useState } from 'react';
import { Scale, BookOpen, ShieldCheck, Shuffle, Hash } from 'lucide-react';

export const HomeScreen = ({ onStartGame }) => {
  const [coursCount, setCoursCount] = useState(20);
  const countOptions = [10, 20, 'all'];

  return (
    <div className="screen home-screen">
      <div className="home-content">
        <div className="home-header">
          <Scale size={64} className="home-logo" />
          <h1>Droit du Travail</h1>
          <p>Préparez vos partiels avec efficacité.</p>
        </div>

        <div className="home-buttons">
          <button onClick={() => onStartGame('annales')} className="mode-btn annales">
            <div className="mode-btn-content">
              <div>
                <h3>Mode Annales (Complet)</h3>
                <p>Les 38 questions de l'examen précédent.</p>
              </div>
              <div className="mode-btn-icons">
                <Shuffle size={20} />
                <ShieldCheck size={24} />
              </div>
            </div>
          </button>

          <div className="cours-mode-container">
            <button onClick={() => onStartGame('cours', coursCount)} className="mode-btn cours">
              <div className="mode-btn-content">
                <div>
                  <h3>Mode Cours</h3>
                  <p>
                    {coursCount === 'all' 
                      ? 'Toutes les questions sur les 5 modules.'
                      : `${coursCount} questions aléatoires sur les 5 modules.`}
                  </p>
                </div>
                <div className="mode-btn-icons">
                  <Shuffle size={20} />
                  <BookOpen size={24} />
                </div>
              </div>
            </button>

            <div className="count-selector">
              <Hash size={16} />
              <span>Nombre de questions:</span>
              <div className="count-options">
                {countOptions.map(opt => (
                  <button
                    key={opt}
                    className={`count-btn ${coursCount === opt ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCoursCount(opt);
                    }}
                  >
                    {opt === 'all' ? 'Tous' : opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          Fait par Rayan Drissi
        </footer>
      </div>
    </div>
  );
};
