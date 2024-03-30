//submit 클릭시 한번에 실행
function mainSubmit(){  
    const fstRadio = document.querySelector('input[name="answer1"]:checked');
    const secRadio = document.querySelector('input[name="answer2"]:checked');
    const thrCheck = document.getElementsByName('answer3'); //다중선택
    const fstText = document.getElementById('textAns_1');
    const secText = document.getElementById('textAns_2');
    const thrText = document.getElementById('textAns_3');
    
    //다중선택 여러값을 가져오기 위한 반복문
    const thrArr = [];
    for (let i = 0; i < thrCheck.length; i++) {
        // 속성중에 체크 된 항목이 있을 경우
        if (thrCheck[i].checked == true) {
            thrArr.push(thrCheck[i].value);
        }
        console.log(thrArr);
    }
    //validation 체크 알럿
    if( (fstRadio === "") || ( secRadio === "") || (thrCheck === "")){

        alert("객관식 질문에 답 해주세요.");
        return false;

    }else if((fstText.value === "") || (secText.value === "") || (thrText.value === "")){
        alert("주관식 질문에 답 해주세요.");
        return false;
    }
    //모달창 안에 선택한 값들을 띄워주는 값
    const element = document.getElementById('checkAns');
    element.innerHTML = 
    `<p>첫번째 질문의 답변은 ` + fstRadio.value + ` 입니다.</p>
     <p>두번째 질문의 답변은 ` + secRadio.value + ` 입니다.</p>
     <p>세번째 질문의 답변은 ` + thrArr + ` 입니다.</p>
     <p>주관식 첫번째 질문의 답변은 ` + fstText.value + ` 입니다.</p>
     <p>주관식 두번째 질문의 답변은 ` + secText.value + ` 입니다.</p>
     <p>주관식 세번째 질문의 답변은 ` + thrText.value + ` 입니다.</p>
    `;
} 

//리셋버튼
function reset(){
    const inputReset = document.querySelectorAll("input");
    inputReset.value = "";
}

//모달창 
const modalOpen = document.getElementById('modalOpen');
const modalClose = document.getElementById('modalClose');
const modal = document.getElementById('modalContainer');
	
modalOpen.addEventListener('click', () => {
    debugger;
    modal.classList.remove('hidden');
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});



