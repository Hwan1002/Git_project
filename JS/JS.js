function quizAnswer1(){
    debugger;
    let answer = document.querySelector('.select1 input[name="answer1"]:checked');
    return answer;
}
function quizAnswer2(){
    debugger;
    let answer = document.querySelector('.select2 input[name="answer2"]:checked');
    return answer;
}
function quizAnswer3(){
    debugger;
    let answer = document.querySelectorAll('.select3 input[type="radio"]:checked');
    return answer;
}

quizAnswer1();
quizAnswer2();
quizAnswer3();

