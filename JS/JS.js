function quizAnswer(){
    let answer = document.querySelector('input[name="choice"]:checked');
    return answer;
}
quizAnswer();