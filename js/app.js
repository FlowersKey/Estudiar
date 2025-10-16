// ========================================
// DATOS DE FLASHCARDS - 60 tarjetas totales
// ========================================
const flashcardsData = [
    // Estructura Atómica (5 cards)
    { id: 1, category: "Estructura Atómica", front: "¿Qué es un átomo?", back: "Unidad básica de la materia con protones, neutrones y electrones." },
    { id: 2, category: "Estructura Atómica", front: "Carga de un protón", back: "+1 (positiva)." },
    { id: 3, category: "Estructura Atómica", front: "¿Dónde se encuentran los electrones?", back: "En los niveles de energía alrededor del núcleo." },
    { id: 4, category: "Estructura Atómica", front: "Elemento más abundante en el universo", back: "Hidrógeno." },
    { id: 5, category: "Estructura Atómica", front: "Número atómico", back: "Cantidad de protones en el núcleo." },

    // Enlaces Químicos (5 cards)
    { id: 6, category: "Enlaces Químicos", front: "Enlace iónico", back: "Transferencia de electrones entre átomos con gran diferencia de electronegatividad." },
    { id: 7, category: "Enlaces Químicos", front: "Ejemplo de molécula con enlace covalente no polar", back: "Molécula de oxígeno O₂." },
    { id: 8, category: "Enlaces Químicos", front: "Fuerzas de Van der Waals", back: "Interacciones débiles debidas a dipolos instantáneos." },
    { id: 9, category: "Enlaces Químicos", front: "Ángulo del enlace en el agua", back: "104.5°." },
    { id: 10, category: "Enlaces Químicos", front: "Enlace de hidrógeno en ADN", back: "Une las bases nitrogenadas complementarias." },

    // Macromoléculas (5 cards)
    { id: 11, category: "Macromoléculas", front: "Reacción de hidrólisis", back: "Rompe polímeros añadiendo agua." },
    { id: 12, category: "Macromoléculas", front: "Ejemplo de polímero de aminoácidos", back: "Proteína." },
    { id: 13, category: "Macromoléculas", front: "Nombre del enlace entre nucleótidos", back: "Enlace fosfodiéster." },
    { id: 14, category: "Macromoléculas", front: "Monómero de los carbohidratos", back: "Monosacárido, p.ej. glucosa." },
    { id: 15, category: "Macromoléculas", front: "Función principal de los polisacáridos estructurales", back: "Soporte y protección (ej. celulosa)." },

    // Proteínas (5 cards)
    { id: 16, category: "Proteínas", front: "Estructura secundaria típica", back: "α-hélice." },
    { id: 17, category: "Proteínas", front: "Ejemplo de proteína transportadora", back: "Hemoglobina." },
    { id: 18, category: "Proteínas", front: "Aminoácido con grupo azufre", back: "Cisteína o Metionina." },
    { id: 19, category: "Proteínas", front: "Denaturación", back: "Pérdida de la estructura tridimensional." },
    { id: 20, category: "Proteínas", front: "Enzima digestiva del estómago", back: "Pepsina." },

    // Lípidos (5 cards)
    { id: 21, category: "Lípidos", front: "Triglicérido", back: "Glicerol + 3 ácidos grasos." },
    { id: 22, category: "Lípidos", front: "Lípido componente de membranas", back: "Fosfolípido." },
    { id: 23, category: "Lípidos", front: "Esteroles importantes en animales", back: "Colesterol." },
    { id: 24, category: "Lípidos", front: "Lípido responsable de impermeabilidad en hojas", back: "Ceras." },
    { id: 25, category: "Lípidos", front: "Función de los lípidos grasos marrones", back: "Producción de calor en animales." },

    // Carbohidratos (5 cards)
    { id: 26, category: "Carbohidratos", front: "Disacárido común en leche", back: "Lactosa." },
    { id: 27, category: "Carbohidratos", front: "Polisacárido de almacenamiento en plantas", back: "Almidón." },
    { id: 28, category: "Carbohidratos", front: "Enzima que hidroliza almidón", back: "Amilasa." },
    { id: 29, category: "Carbohidratos", front: "Polisacárido de reserva animal", back: "Glucógeno." },
    { id: 30, category: "Carbohidratos", front: "Función estructural de la quitina", back: "Forma el exoesqueleto de artrópodos." },

    // Ácidos Nucleicos (5 cards)
    { id: 31, category: "Ácidos Nucleicos", front: "Base exclusiva del ARN", back: "Uracilo." },
    { id: 32, category: "Ácidos Nucleicos", front: "Tipo de enlace entre A-T", back: "Dos puentes de hidrógeno." },
    { id: 33, category: "Ácidos Nucleicos", front: "Galardonados por el modelo del ADN", back: "Watson y Crick." },
    { id: 34, category: "Ácidos Nucleicos", front: "Síntesis de ARN a partir de ADN", back: "Transcripción." },
    { id: 35, category: "Ácidos Nucleicos", front: "Proceso que convierte ARN en proteína", back: "Traducción." },

    // Membranas (5 cards)
    { id: 36, category: "Membranas", front: "Modelo de mosaico fluido", back: "Describe la bicapa como fluida con proteínas incrustadas." },
    { id: 37, category: "Membranas", front: "Ejemplo de transporte pasivo", back: "Difusión simple de O₂." },
    { id: 38, category: "Membranas", front: "Bomba sodio-potasio intercambia", back: "3 Na⁺ fuera, 2 K⁺ dentro con gasto de ATP." },
    { id: 39, category: "Membranas", front: "Pinocitosis", back: "Ingreso de líquidos mediante vesículas pequeñas." },
    { id: 40, category: "Membranas", front: "Proteína canal de agua", back: "Aquaporina." },

    // Organelas (5 cards)
    { id: 41, category: "Organelas", front: "Función principal del aparato de Golgi", back: "Modifica y empaqueta proteínas." },
    { id: 42, category: "Organelas", front: "Organelo con ADN propio aparte del núcleo", back: "Mitocondria." },
    { id: 43, category: "Organelas", front: "Organelo exclusivo de plantas para fotosíntesis", back: "Cloroplasto." },
    { id: 44, category: "Organelas", front: "Lugar donde ocurre la traducción", back: "Ribosoma." },
    { id: 45, category: "Organelas", front: "Organelo encargado de detoxificación", back: "Retículo endoplásmico liso." },

    // Dominios de la Vida (5 cards)
    { id: 46, category: "Dominios de la Vida", front: "Dominio con peptidoglucano", back: "Bacteria." },
    { id: 47, category: "Dominios de la Vida", front: "Dominio con histonas pero sin núcleo", back: "Archaea." },
    { id: 48, category: "Dominios de la Vida", front: "Dominio con organelos membranosos", back: "Eukarya." },
    { id: 49, category: "Dominios de la Vida", front: "Iniciador de traducción en Archaea", back: "Metionina." },
    { id: 50, category: "Dominios de la Vida", front: "Temperaturas >100°C toleradas por", back: "Algunas especies de Archaea." },

    // Membrana Plasmática (10 cards NUEVAS)
    { id: 51, category: "Membrana Plasmática", front: "¿Qué estructura forma la membrana plasmática?", back: "Bicapa de fosfolípidos." },
    { id: 52, category: "Membrana Plasmática", front: "Función de los fosfolípidos en la membrana", back: "Crear una barrera que separa el citoplasma del exterior celular y delimitar la célula." },
    { id: 53, category: "Membrana Plasmática", front: "Función del colesterol en la membrana", back: "Aumentar la resistencia de la célula, especialmente ante cambios de temperatura." },
    { id: 54, category: "Membrana Plasmática", front: "Función de las proteínas de membrana", back: "Permitir el transporte de sustancias del interior al exterior de la célula o viceversa." },
    { id: 55, category: "Membrana Plasmática", front: "Diferencia entre difusión simple y facilitada", back: "Simple: moléculas pequeñas pasan por fosfolípidos. Facilitada: moléculas grandes necesitan proteínas (canal o transporte)." },
    { id: 56, category: "Membrana Plasmática", front: "¿Qué es la ósmosis?", back: "Difusión de agua (H₂O) a través de la membrana, puede ocurrir por difusión simple o facilitada." },
    { id: 57, category: "Membrana Plasmática", front: "Diferencia entre transporte pasivo y activo", back: "Pasivo: no consume energía, va a favor del gradiente (mayor→menor). Activo: consume energía, va contra el gradiente (menor→mayor)." },
    { id: 58, category: "Membrana Plasmática", front: "¿Qué son las proteínas bomba?", back: "Moléculas del transporte activo que rompen ATP para conseguir el paso de sustancias al interior celular." },
    { id: 59, category: "Membrana Plasmática", front: "Diferencia entre pinocitosis y fagocitosis", back: "Pinocitosis: endocitosis de sustancias líquidas. Fagocitosis: endocitosis de sustancias sólidas." },
    { id: 60, category: "Membrana Plasmática", front: "¿Qué es la exocitosis?", back: "Proceso inverso a la endocitosis, donde la vesícula expulsa sustancias hacia el exterior de la célula." }
];

// ========================================
// ESTADO DE LA APLICACIÓN
// ========================================
let currentMode = 'flashcard';
let currentCardIndex = 0;
let isFlipped = false;
let flashcards = [...flashcardsData];
let filteredCards = [...flashcardsData];
let favorites = new Set();
let studiedCards = new Set();
let quizState = {
    currentQuestion: 0,
    score: 0,
    totalQuestions: 10,
    questions: [],
    selectedAnswer: null,
    answered: false,
    startTime: null
};
let studyStartTime = Date.now();
let timerInterval = null;

// ========================================
// ELEMENTOS DEL DOM
// ========================================
const flashcardModeBtn = document.getElementById('flashcard-mode');
const quizModeBtn = document.getElementById('quiz-mode');
const flashcardContent = document.getElementById('flashcard-content');
const quizContent = document.getElementById('quiz-content');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');
const flashcard = document.getElementById('flashcard');
const frontText = document.getElementById('front-text');
const backText = document.getElementById('back-text');
const currentCardElement = document.getElementById('current-card');
const totalCardsElement = document.getElementById('total-cards');
const categoryBadge = document.getElementById('category-badge');
const progressFill = document.getElementById('progress-fill');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const resetBtn = document.getElementById('reset-btn');
const quizTimer = document.getElementById('quiz-timer');
const quizScore = document.getElementById('quiz-score');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const submitAnswer = document.getElementById('submit-answer');
const nextQuiz = document.getElementById('next-quiz');
const quizFeedback = document.getElementById('quiz-feedback');
const totalStudiedEl = document.getElementById('total-studied');
const favoritesCountEl = document.getElementById('favorites-count');
const quizAccuracyEl = document.getElementById('quiz-accuracy');
const studyTimeEl = document.getElementById('study-time');

// ========================================
// INICIALIZACIÓN
// ========================================
function init() {
    attachEventListeners();
    updateMode();
    updateCard();
    updateStats();
    startStudyTimer();
}

// ========================================
// EVENT LISTENERS
// ========================================
function attachEventListeners() {
    flashcardModeBtn.addEventListener('click', () => switchMode('flashcard'));
    quizModeBtn.addEventListener('click', () => switchMode('quiz'));
    categoryFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
    flashcard.addEventListener('click', flipCard);
    prevBtn.addEventListener('click', prevCard);
    nextBtn.addEventListener('click', nextCard);
    flipBtn.addEventListener('click', flipCard);
    favoriteBtn.addEventListener('click', toggleFavorite);
    shuffleBtn.addEventListener('click', shuffleCards);
    resetBtn.addEventListener('click', resetCards);
    submitAnswer.addEventListener('click', submitQuizAnswer);
    nextQuiz.addEventListener('click', nextQuizQuestion);
    document.addEventListener('keydown', handleKeydown);
}

// ========================================
// CAMBIO DE MODO
// ========================================
function switchMode(mode) {
    currentMode = mode;
    updateMode();
    if (mode === 'quiz') startQuiz();
}

function updateMode() {
    if (currentMode === 'flashcard') {
        flashcardModeBtn.classList.add('active', 'btn--primary');
        flashcardModeBtn.classList.remove('btn--outline');
        quizModeBtn.classList.remove('active', 'btn--primary');
        quizModeBtn.classList.add('btn--outline');
        flashcardContent.classList.remove('hidden');
        quizContent.classList.add('hidden');
    } else {
        quizModeBtn.classList.add('active', 'btn--primary');
        quizModeBtn.classList.remove('btn--outline');
        flashcardModeBtn.classList.remove('active', 'btn--primary');
        flashcardModeBtn.classList.add('btn--outline');
        flashcardContent.classList.add('hidden');
        quizContent.classList.remove('hidden');
    }
}

// ========================================
// FILTRADO
// ========================================
function applyFilters() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    filteredCards = flashcardsData.filter(card => {
        const matchesCategory = !category || card.category === category;
        const matchesSearch = !searchTerm || 
            card.front.toLowerCase().includes(searchTerm) ||
            card.back.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    if (filteredCards.length === 0) {
        showFeedback('❌ No se encontraron tarjetas', 'error');
        return;
    }
    
    flashcards = [...filteredCards];
    currentCardIndex = 0;
    updateCard();
    showFeedback(`🔍 ${filteredCards.length} tarjetas encontradas`, 'success');
}

// ========================================
// FUNCIONES DE FLASHCARD
// ========================================
function updateCard() {
    if (flashcards.length === 0) return;
    
    const card = flashcards[currentCardIndex];
    flashcard.classList.remove('flipped');
    isFlipped = false;
    flashcard.classList.add('changing');
    
    setTimeout(() => {
        frontText.textContent = card.front;
        backText.textContent = card.back;
        currentCardElement.textContent = currentCardIndex + 1;
        totalCardsElement.textContent = flashcards.length;
        categoryBadge.textContent = card.category;
        updateCategoryBadge(card.category);
        updateProgress();
        updateButtons();
        updateFavoriteButton(card.id);
        flashcard.classList.remove('changing');
        studiedCards.add(card.id);
        updateStats();
    }, 150);
}

function updateCategoryBadge(category) {
    categoryBadge.className = 'category-badge';
    const categoryClass = category.toLowerCase()
        .replace(/\s+/g, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    categoryBadge.classList.add(categoryClass);
}

function updateProgress() {
    const progress = ((currentCardIndex + 1) / flashcards.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function updateButtons() {
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === flashcards.length - 1;
}

function updateFavoriteButton(cardId) {
    if (favorites.has(cardId)) {
        favoriteBtn.classList.add('favorite-active');
        favoriteBtn.textContent = '⭐ Favorito';
    } else {
        favoriteBtn.classList.remove('favorite-active');
        favoriteBtn.textContent = '☆ Favorito';
    }
}

function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

function nextCard() {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        updateCard();
    }
}

function toggleFavorite() {
    const cardId = flashcards[currentCardIndex].id;
    if (favorites.has(cardId)) {
        favorites.delete(cardId);
        showFeedback('💔 Removido de favoritos', 'info');
    } else {
        favorites.add(cardId);
        showFeedback('⭐ Agregado a favoritos', 'success');
    }
    updateFavoriteButton(cardId);
    updateStats();
}

function shuffleCards() {
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    currentCardIndex = 0;
    updateCard();
    showFeedback('🔀 Tarjetas mezcladas', 'success');
}

function resetCards() {
    flashcards = [...filteredCards];
    currentCardIndex = 0;
    updateCard();
    showFeedback('🔄 Orden original restaurado', 'success');
}

// ========================================
// FUNCIONES DE QUIZ
// ========================================
function startQuiz() {
    const shuffledCards = [...flashcards].sort(() => Math.random() - 0.5);
    quizState.questions = shuffledCards.slice(0, Math.min(10, shuffledCards.length));
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.answered = false;
    quizState.startTime = Date.now();
    
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateQuizTimer, 1000);
    
    showQuizQuestion();
}

function showQuizQuestion() {
    if (quizState.currentQuestion >= quizState.questions.length) {
        endQuiz();
        return;
    }
    
    const question = quizState.questions[quizState.currentQuestion];
    const allOptions = [...flashcardsData].filter(card => card.category === question.category);
    
    const wrongAnswers = allOptions
        .filter(card => card.id !== question.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(card => card.back);
    
    const options = [...wrongAnswers, question.back].sort(() => Math.random() - 0.5);
    
    quizQuestion.textContent = question.front;
    quizScore.textContent = quizState.score;
    
    quizOptions.innerHTML = '';
    options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.innerHTML = `
            <input type="radio" name="quiz-answer" value="${option}" id="option-${index}">
            <label for="option-${index}">${option}</label>
        `;
        optionDiv.addEventListener('click', () => selectQuizOption(optionDiv, option));
        quizOptions.appendChild(optionDiv);
    });
    
    quizState.selectedAnswer = null;
    quizState.answered = false;
    submitAnswer.disabled = true;
    nextQuiz.disabled = true;
    quizFeedback.classList.add('hidden');
}

function selectQuizOption(optionDiv, answer) {
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    optionDiv.classList.add('selected');
    optionDiv.querySelector('input').checked = true;
    quizState.selectedAnswer = answer;
    submitAnswer.disabled = false;
}

function submitQuizAnswer() {
    if (!quizState.selectedAnswer || quizState.answered) return;
    
    const question = quizState.questions[quizState.currentQuestion];
    const isCorrect = quizState.selectedAnswer === question.back;
    
    if (isCorrect) {
        quizState.score++;
        quizFeedback.textContent = '✅ ¡Correcto!';
        quizFeedback.className = 'quiz-feedback correct';
    } else {
        quizFeedback.textContent = `❌ Incorrecto. La respuesta correcta es: ${question.back}`;
        quizFeedback.className = 'quiz-feedback incorrect';
    }
    
    quizFeedback.classList.remove('hidden');
    quizState.answered = true;
    submitAnswer.disabled = true;
    nextQuiz.disabled = false;
    
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

function nextQuizQuestion() {
    quizState.currentQuestion++;
    showQuizQuestion();
}

function endQuiz() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    const accuracy = Math.round((quizState.score / quizState.questions.length) * 100);
    const timeElapsed = Math.floor((Date.now() - quizState.startTime) / 1000);
    
    quizQuestion.textContent = '🎉 ¡Quiz Completado!';
    quizQuestion.style.color = 'var(--color-text)';
    quizOptions.innerHTML = `
        <div style="text-align: center; padding: 30px; background: var(--color-surface); border-radius: var(--radius-base); border: 2px solid var(--color-border);">
            <h3 style="color: var(--color-text); margin-bottom: 20px; font-size: 1.5rem;">📊 Resultados Finales</h3>
            <div style="display: grid; gap: 16px; margin-bottom: 20px;">
                <p style="color: var(--color-text); font-size: 1.2rem;">
                    <strong>Puntuación:</strong> ${quizState.score}/${quizState.questions.length}
                </p>
                <p style="color: var(--color-text); font-size: 1.2rem;">
                    <strong>Precisión:</strong> ${accuracy}%
                </p>
                <p style="color: var(--color-text); font-size: 1.2rem;">
                    <strong>Tiempo:</strong> ${formatTime(timeElapsed)}
                </p>
            </div>
            ${accuracy >= 80 ? '<p style="color: var(--color-success); font-size: 1.1rem; font-weight: 600;">🌟 ¡Excelente trabajo!</p>' : 
              accuracy >= 60 ? '<p style="color: var(--color-warning); font-size: 1.1rem; font-weight: 600;">👍 ¡Buen intento!</p>' : 
              '<p style="color: var(--color-error); font-size: 1.1rem; font-weight: 600;">💪 ¡Sigue practicando!</p>'}
        </div>
    `;
    
    submitAnswer.style.display = 'none';
    nextQuiz.textContent = '🔄 Nuevo Quiz';
    nextQuiz.style.display = 'inline-flex';
    nextQuiz.disabled = false;
    nextQuiz.onclick = () => {
        submitAnswer.style.display = 'inline-flex';
        startQuiz();
    };
    
    quizFeedback.classList.add('hidden');
    updateStats();
}

function updateQuizTimer() {
    if (!quizState.startTime) return;
    const elapsed = Math.floor((Date.now() - quizState.startTime) / 1000);
    quizTimer.textContent = `⏱️ ${formatTime(elapsed)}`;
}

// ========================================
// ESTADÍSTICAS
// ========================================
function updateStats() {
    totalStudiedEl.textContent = studiedCards.size;
    favoritesCountEl.textContent = favorites.size;
    
    if (quizState.questions.length > 0 && quizState.answered) {
        const accuracy = Math.round((quizState.score / quizState.questions.length) * 100);
        quizAccuracyEl.textContent = `${accuracy}%`;
    }
}

function startStudyTimer() {
    setInterval(() => {
        const elapsed = Math.floor((Date.now() - studyStartTime) / 1000);
        studyTimeEl.textContent = formatTime(elapsed);
    }, 1000);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ========================================
// NAVEGACIÓN CON TECLADO
// ========================================
function handleKeydown(event) {
    const handledKeys = [' ', 'ArrowLeft', 'ArrowRight', 'Enter', 'm', 'M', 'r', 'R', 'f', 'F', 'q', 'Q'];
    
    if (handledKeys.includes(event.key)) {
        event.preventDefault();
    }
    
    if (currentMode === 'flashcard') {
        switch (event.key) {
            case ' ':
            case 'Enter':
                flipCard();
                break;
            case 'ArrowLeft':
                prevCard();
                break;
            case 'ArrowRight':
                nextCard();
                break;
            case 'f':
            case 'F':
                toggleFavorite();
                break;
            case 'm':
            case 'M':
                shuffleCards();
                break;
            case 'r':
            case 'R':
                resetCards();
                break;
            case 'q':
            case 'Q':
                switchMode('quiz');
                break;
        }
    }
}

// ========================================
// SISTEMA DE FEEDBACK
// ========================================
function showFeedback(message, type = 'info') {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    
    const colors = {
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-primary)'
    };
    
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: var(--shadow-lg);
        max-width: 300px;
    `;
    
    if (!document.getElementById('feedback-styles')) {
        const style = document.createElement('style');
        style.id = 'feedback-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(feedback);
    
     setTimeout(() => {
        frontText.textContent = card.front;
        backText.textContent = card.back;
        currentCardElement.textContent = currentCardIndex + 1;
        totalCardsElement.textContent = flashcards.length;
        categoryBadge.textContent = card.category;
        updateCategoryBadge(card.category);
        updateProgress();
        updateButtons();
        updateFavoriteButton(card.id);
        flashcard.classList.remove('changing');
        studiedCards.add(card.id);
        updateStats();
    }, 150);
}

// ========================================
// INICIALIZAR AL CARGAR
// ========================================
document.addEventListener('DOMContentLoaded', init);
