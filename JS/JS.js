//첫번째 객관식 답가져오기
function quizAnswer1(){
    let answer = document.querySelector('.select1 input[name="answer1"]:checked');
    return answer;
}
//두번째 객관식 답가져오기
function quizAnswer2(){
    let answer = document.querySelector('.select2 input[name="answer2"]:checked');
    return answer;
}
//세번째 다중 객관식 답가져오기
function quizAnswer3(){
    let answer = document.querySelectorAll('.select3 input[type="radio"]:checked');
    return answer;
}
//여러개의 텍스트 값 가져오기
function quizAnswer4(){
    let answer = document. querySelectorAll('.textContents input[name="txt"]');
    console.log(answer);
}
quizAnswer1();
quizAnswer2();
quizAnswer3();
quizAnswer4();


