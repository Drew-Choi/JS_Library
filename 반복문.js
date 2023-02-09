//for 기본----------------------------------------------------------------
for (let i = 0; i < 10; i++) {
  //필요한 함수 넣기
};


// for of , 그룹 안에 있는 것에 반복적으로 무언가 붙여줄때 사용-----------------------
const StoreText1 = document.querySelector(".store__text1");
  const StoreText2 = document.querySelector(".store__text2");
  const StoreImage1 = document.querySelector(".store__image1");
  const StoreImage2 = document.querySelector(".store__image2");
  const StoreImage3 = document.querySelector(".store__image3");
  const StoreImage4 = document.querySelector(".store__image4");
  const BTN = document.querySelector(".store .inner .btn.btn--black");
  let Group = [StoreText1, StoreText2, StoreImage1, StoreImage2, StoreImage3, StoreImage4, BTN];
//ex
for (let value of Group) {
  value.classList.add("on");
};


//for in , in 뒤의 그룹 객체 수 만큼만 반복------------------------------------
for (let i in Group) {
  //필요한 함수 넣기
};