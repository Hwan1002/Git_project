function quizAnswer(){
    let answer = document.querySelector('input[name="choice"]:checked').value;
    return answer;
}
quizAnswer();
