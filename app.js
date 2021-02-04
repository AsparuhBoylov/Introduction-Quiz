const correctAnswers = ['A','B','C','A','B'];
const relativelyCorrectAns = ['B','A','B','A','C'];
const result = document.querySelector('.result');

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let scores = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            scores += 10;
        }
        else if(answer === relativelyCorrectAns[index]){
            scores += 5;
        }
    });
    
    result.classList.remove('d-none');
    scrollTo(0,0);

    if(scores <= 19 ){
        result.querySelector('.result-sec-para').textContent = 'You don\'t know me very well';
    }
    else if(scores > 20 && scores <= 40){
        result.querySelector('.result-sec-para').textContent = 'You know me, but you need to know me better';
    }
    else if(scores > 40){
        result.querySelector('.result-sec-para').textContent = 'You know me very well';
    }

    let resultDisplay = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = resultDisplay;
        if(resultDisplay === scores){
            clearInterval(timer);
        }
        else {
            resultDisplay ++;
        }
    }, 30);
});