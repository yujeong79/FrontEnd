//////// 페이지에 처음 들어왔을 때 
window.addEventListener("load", function () {
  let data = localStorage.getItem("data")
  if (data != null) {
    document.querySelector("#saved > li").innerText = JSON.parse(data)
  } else {
    document.querySelector('#saved > li').innerText = "저장된 내용이 없습니다."
  }
})

//////// 등록 #create 

// 1. 등록 버튼 선택(접근)
const registBnt = document.querySelector("#create")

let inputTag

// 2. 등록 버튼에 클릭 이벤트 추가
registBnt.addEventListener("click", function() {

  // 2-a. input 태그  || input 아이디 선택 
  inputTag = document.querySelector("#input")
  
  // 2-b. input에서 가져온 value를 json문자열으로 바꾸기
  const objToJson = JSON.stringify(inputTag.value)
  
  // 2-c. localStorage에 "data" 이름으로 값 추가
  localStorage.setItem('data', objToJson)

})

// (중요) 2-d. input태그의 value값 초기화
inputTag.value = ''

//////// 조회 #read 
// 코드를 작성하세요.
let data

window.addEventListener('load', function() { // window의 모든 요소들이 모두 load되고 나면 콜백 함수 호풀
  
  // localStorage에 저장된 data를 가져와서 배열의 형태로 저장 
  // -> createDataItem 메서드를 사용해서 <ul> 태그 안에 넣어주기
  data = this.localStorage.getItem('data') 

  if(data !== null) {
    data = JSON.parse(data) // JSON -> Object
    for(let i = 0; i < data.length; i++) {
      createDataItem(data[i]) // 
    }
  } else {
    data = []
  }
})

const createDataItem = (dataItem) => {

  const ulTag = document.querySelector('#saved')
  const liTag = document.createElement('li') // 리스트 태그 생성
  const spanTag = document.createElement('span')
  
  spanTag.innerText = dataItem // 데이터의 값을 span 태그에 넣고
  liTag.appendChild(spanTag) // span 태그를 li 태그에 넣기
  
  const delBtn = document.createElement('a') // 삭제 버튼 태그 생성
  delBtn.innerText = '삭제' // 삭제버튼을 만들어서
  delBtn.addEventListener("click", () => {
    delBtn.remove()
  })
  liTag.appendChild(delBtn) // li 태그에 넣기

  ulTag.appendChild(liTag)
}

//////// 삭제 #delete 
// 코드를 작성하세요.





