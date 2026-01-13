import { Scale, BookOpen, ShieldCheck, Shuffle } from 'lucide-react';

export const HomeScreen = ({ onStartGame }) => {
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

          <button onClick={() => onStartGame('cours')} className="mode-btn cours">
            <div className="mode-btn-content">
              <div>
                <h3>Mode Cours</h3>
                <p>25 questions aléatoires sur les 5 modules.</p>
              </div>
              <div className="mode-btn-icons">
                <Shuffle size={20} />
                <BookOpen size={24} />
              </div>
            </div>
          </button>
        </div>
        <footer className="home-footer">
          Fait par Rayan Drissi
        </footer>
      </div>
    </div>
  );
};
