{
  //일정명과 일자를 입력하고 버튼을 클릭하면
  //하단에 목록이 추가된다
  //로컬스토리지에 값을 보관한다
  /* 추가된 목록은 고유의 id값을 가져아함 */
  //삭제버튼을 누르면 삭제가 되어야함
  /* 삭제버튼에 id값을 심어주면됨 */
  //시작될때 로컬스토리지에 저장값이 있다면 arr에 다시 배열시킨다 없다면 빈배열
  /* -----------------검색기능 만들기------------------------- */
  //arr필터로 includes를 이용해 새로운 배열을 만들고 어레이 카피에 넣은후 출력

  let arr = localStorage.getItem("todolocalArr")
    ? JSON.parse(localStorage.getItem("todolocalArr"))
    : [];
  let copyArr = [...arr];

  function fnPrint() {
    document.querySelector(".ex2 .result").innerHTML = "";
    copyArr.forEach((v) => {
      let { id, inputTitle, inputDate } = v;
      document.querySelector(".ex2 .result").insertAdjacentHTML(
        "beforeend",
        `
        <div data-aos="fade-down-left">
      <p>날짜: ${inputDate} 할 일 : ${inputTitle}<button value='${id}'>삭제</button></p>
      </div>`
      ); //insertAdjacentHTML
    }); //foreach
  }
  fnPrint();

  document.querySelector(".ex2").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(copyArr);

    let inputTitle = document.querySelector(".ex2 .input_title").value;
    let inputDate = document.querySelector(".ex2 .input_date").value;
    let id = Date.now();
    let obj = { id, inputTitle, inputDate };
    arr.unshift(obj);
    copyArr = [...arr];
    localStorage.setItem("todolocalArr", JSON.stringify(arr));
    fnPrint();
  });

  document.querySelector(".ex2 .search").addEventListener("input", (e) => {
    copyArr = arr.filter((v) => {
      return v.inputTitle.includes(e.target.value);
    });
    fnPrint();
  });
} //defer




/* ----------------------chart */
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });