window.onload = function () {
  let cars = localStorage.getItem("cars"); // 로컬스토리지에 있는 cars 를 가져온다.

  let likeCarList = document.querySelector("#like-car-list"); // 찜 리스트를 넣을 <div id="like-car-list"> 태그를 객체로 가져온다.

  if (cars === null) {
    likeCarList.innerText = "아직 찜한 자동차가 없습니다...";
  } else {
    // 데이터가 있다면 가져온 cars를 Json -> Object 변경하기
    cars = JSON.parse(cars);

    let likeCarListHtml = document.createElement("ul"); // <ul> 태그 생성
    for (let i = 0; i < cars.length; i++) { // <ul> 태그 안에 innerHTML로 각 차의 정보를 담은 <li> 태그 넣기
      likeCarListHtml.innerHTML += `<li>${cars[i]["VIN"]} | ${cars[i]["modelName"]} | ${cars[i]["color"]} | ${cars[i]["mileage"]}</li>`;
    }

    likeCarList.appendChild(likeCarListHtml);
  }
};

const btnList = document.querySelectorAll(".car-info > button"); // 모든 차들의 정보의 각 button 태그들을 가져온다.

btnList.forEach((btn) => { // 모든 버튼을 모든 btnList에서 요소를 하나씩 빼서 함수를 적용시킨다.
  btn.addEventListener("click", function (event) { // 찜 버튼이 눌렸으면
    const data = event.target.parentElement.innerText.split("\n");

    const cars = { // 자동차 정보 가져오기
      VIN: data[0],
      modelName: data[1],
      color: data[2],
      mileage: data[3],
    };

    // 로컬스토리지에 있는 cars 를 가져온다.
    let localCars = localStorage.getItem("cars");

    if (localCars === null) {
      localCars = [cars];
    } else {
      // cars가 있다면 JSON -> Object 으로 변경
      localCars = JSON.parse(localCars);
      localCars.push(cars); // 새롭게 찜이 눌린 자동차의 정보를 넣어주기
    }

    // 로컬스토리지에 저장하기 위해서는 문자열의 형태로만 저장할 수 있다.
    const carsJson = JSON.stringify(localCars);
    localStorage.setItem("cars", carsJson);
  });
});
