document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Correct answers
    const correctAnswers = {
        q1: 'b',
        q2: 'c',
        q3: 'b',
        q5: 'c'
    };

    const answers = new FormData(event.target);
    
    for (let [question, answer] of answers.entries()) {
        const resultElement = document.getElementById(`answer${question.charAt(1)}`);
        const isCorrect = answer === correctAnswers[question];
        
        resultElement.textContent = isCorrect 
            ? "Correct answer!" 
            : `Incorrect. Correct answer is ${correctAnswers[question].toUpperCase()}.`;
        resultElement.style.color = isCorrect ? 'green' : 'red';
    }
});
