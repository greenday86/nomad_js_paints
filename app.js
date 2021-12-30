
// canvas 가져오기

// ? const canvas = document.querySelector("#jsCanvas");
const canvas = document.getElementById("jsCanvas");

// 2D Context!! 
// context는 canvas Element 안에서 우리가 픽셀에 접근할 수 있는 방법을 의미함
// 2d 외에도 다양한 Context가 있음 / mdn 페이지 참조
const ctx = canvas.getContext("2d");

// 중요. CSS의 파일에 명시한 사이즈와 동일하게 픽셀을 다루는 윈도우가 
// 얼마나 큰 지 Canvas의 사이즈를 줘야함
canvas.width = 700;
canvas.height = 700;

// 우리가 그릴 선들이 모두 이 색을 갖는다는 의미
ctx.strokeStyle = "#2c2c2c";
// 선의 너비
ctx.lineWidth = 2.5;


let painting = false;


function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


// paht는 '선'을 의미

function onMouseMove(event){
// event의 porperty 중에서 offsetX, offsetY는 캔버스 내의 좌표를 의미
// clientX, Y 는 스크린 화면 상의 위치를 나타냄
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        // 캔버스에서 마우스를 움직이는 모든 순간에 path(선)을 만듦
        // path의 시작점은 내 마우스가 있은 곳
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        // 아래 두 코드는 마우스를 움직이는 내내 발생한다
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

/*
function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

function onMouseLeave(event){
    painting = false;
}
*/

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

