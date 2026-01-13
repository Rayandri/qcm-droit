import { useState, useCallback, useEffect } from 'react';
import { QUESTIONS_ANNALES, QUESTIONS_COURS, QUESTIONS_COURS_SUPPLEMENTAIRES } from '../data';
import { shuffleArray } from '../utils/shuffle';

export const useQuiz = () => {
    const [mode, setMode] = useState(null);
    const [gameQuestions, setGameQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showFlashcard, setShowFlashcard] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState([]);

    const startGame = useCallback((selectedMode, questionCount = 'all') => {
        setMode(selectedMode);

        let sourceQuestions;
        if (selectedMode === 'annales') {
            sourceQuestions = QUESTIONS_ANNALES;
        } else {
            const allCoursQuestions = [...QUESTIONS_COURS, ...QUESTIONS_COURS_SUPPLEMENTAIRES];
            sourceQuestions = shuffleArray(allCoursQuestions);

            if (questionCount !== 'all') {
                sourceQuestions = sourceQuestions.slice(0, questionCount);
            }
        }

        setGameQuestions(selectedMode === 'annales' ? shuffleArray(sourceQuestions) : sourceQuestions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
        setIsAnswered(false);
        setSelectedOption(null);
    }, []);

    useEffect(() => {
        if (gameQuestions.length > 0 && currentQuestionIndex < gameQuestions.length) {
            const currentQ = gameQuestions[currentQuestionIndex];
            setShuffledOptions(shuffleArray(currentQ.options));
        }
    }, [currentQuestionIndex, gameQuestions]);

    const handleOptionClick = useCallback((optionId) => {
        if (isAnswered) return;
        setSelectedOption(optionId);
        setIsAnswered(true);

        const currentQ = gameQuestions[currentQuestionIndex];
        if (optionId === currentQ.correctId) {
            setScore((s) => s + 1);
        }
    }, [isAnswered, gameQuestions, currentQuestionIndex]);

    const handleNext = useCallback(() => {
        const nextIndex = currentQuestionIndex + 1;

        if (nextIndex > 0 && nextIndex % 5 === 0 && !showFlashcard && nextIndex < gameQuestions.length) {
            setShowFlashcard(true);
            return;
        }

        if (nextIndex < gameQuestions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption(null);
            setIsAnswered(false);
            setShowFlashcard(false);
        } else {
            setShowResult(true);
        }
    }, [currentQuestionIndex, showFlashcard, gameQuestions.length]);

    const handleFlashcardDone = useCallback(() => {
        setShowFlashcard(false);
        setCurrentQuestionIndex((i) => i + 1);
        setSelectedOption(null);
        setIsAnswered(false);
    }, []);

    const resetGame = useCallback(() => {
        setMode(null);
        setGameQuestions([]);
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    }, []);

    const currentQuestion = gameQuestions[currentQuestionIndex] || null;

    return {
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
    };
};
