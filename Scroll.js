// 스크롤이벤트 함수 ex
document.addEventListener("scroll", () => {
  const Elsal = document.querySelector('.elsalvador__item');
  const ElsalCon = document.querySelector('.elsalvador__content');
  if (window.pageYOffset > 70) {
    Elsal.classList.add("on"), ElsalCon.classList.add("on");
   } else {
    Elsal.classList.remove("on"), ElsalCon.classList.remove("on");
   }
});



// 기본 문법-----------------------------------------------------
// 브라우저 사이즈 설정하기

window.innerHeight; //뷰의 세로 사이즈 알아내기 (픽셀단위)
window.innerWidth; //뷰의 가로 사이즈 알아내기 (픽셀단위)

// 익스플로러 5부터 7버전만을 위한 문법 1
document.documentElement.clientHeight
document.documentElement.clientWidth

// 익스플로러 5부터 7버전만을 위한 문법2
document.body.clientHeight
document.body.clientWidth

//뷰 바깥의 브라우저 크기까지 포함하여 알아내고 싶을 땐 outerHeight, outerWidth
window.outerHeight;
window.outerWidth;



//스크롤 값-----------------------------------------------------
//IE, firefox 크롬, 사파리, 오페라에도 같은 프로퍼티가 있지만 값이 항상 0
document.documentElement.scrollLeft : x 축 방향으로 스크롤한 거리 (scrollX)
document.documentElement.scrollTop : y 축 방향으로 스크롤한 거리 (scrollY)
  
// Chrome, safari, opera, edge, Quirks Mode
document.body.scrollLeft : x 축 방향으로 스크롤한 거리 (scrollX)
document.body.scrollTop : y 축 방향으로 스크롤한 거리 (scrollY)

// Firefox, chrome, safari, opera, edge, IE>=9
window.pageXOffset : x 축 방향으로 스크롤한 거리
window.pageYOffset : y 축 방향으로 스크롤한 거리

// - scrollHeight / scrollWidth - 스크롤 바가 없을 때 차지했을 콘텐츠 전체 높이/ 너비
// - scrollLeft / scrollTop - 콘텐츠 영역의 왼쪽 / 위쪽에 보이지 않는 픽셀 너비 / 높이


//떨어진 크기 값-----------------------------------------------
// offset 크기
Element.offsetTop; //해당 요소의 위로부터 떨어진 픽셀 거리
Element.offsetLeft; //해당 요소의 왼쪽으로부터 떨어진 픽셀 거리
Element.offsetHeight; //해당 요소의 픽셀 세로크기
Element.offsetWidth; //해당 요소의 픽셀 가로크기
//offsetLeft와 offsetTop 은 offsetParent 와 관련이 있습니다.


// 스크롤 이동-------------------------------------------------
// window.scrollTo  /  window.scrollBy
// 1. window의 왼쪽 모서리를 기준으로 가로200px, 세로300px 스크롤 이동 
window.scrollTo( 200, 300 );

// 2. 현재 위치를 기준으로 가로200px, 세로300px 스크롤 이동
window.scrollBy( 200, 200 );

// 3. 현재 위치를 기준으로 가로 0px 세로 0px 스크롤을 자연스럽게 이동
window.scrollTo({top:0, left:0, behavior:smooth})



//스크롤 좌표를 알 수 있는 함수-------------------------------------
window.addEventListener('scroll', () => { 
  //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
  console.log(window.scrollX, window.scrollY);
});

//마우스힐 이벤트 감지---------------------------------------------
//javascript의 경우 인자값으로 e만 주면 된다.
window.addEventListener('wheel', (e: WheelEvent) => { 
  console.log(e.deltaY, e.deltaX);
});