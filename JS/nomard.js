
const wrapper = document.querySelector(".wrapper");
const friends = ["hwan", "jin", "kyu", "tae", "won"];
const list = `<h1>people i love</h1>
              <ul>
                ${friends.map(friend => `<li>${friend}</li>`).join("")}
              </ul>  
            `; // friends  배열안에 있는 값들을 map기능으로 하나하나 값들을 friend 변수로 지정하고 그변수를 백팃 안에 <li>를 사용하여 값을 넣는다
wrapper.innerHTML = list;

const friends = ['t', 'c', 'a', 'r'];
Array.from(friends).forEach(friend => {console.log(hi)});