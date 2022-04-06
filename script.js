let min = 0;
let sec = 0;
let ten_msec = 0;
let intervalId; // setInterval의 ID를 확인하기 위한 변수

const countMin = document.querySelector('.min');
const countSec = document.querySelector('.sec');
const countTenM = document.querySelector('.ten_msec');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

startBtn.onclick = function () {
  clearInterval(intervalId); // 실수로 두번 눌렀을 때 intervalId 2개 생기는거 방지, 기존의 Id 삭제 후 돌리기 시작
  intervalId = setInterval(operateTimer, 10);
};

stopBtn.onclick = function () {
  clearInterval(intervalId);
};

resetBtn.onclick = function () {
  clearInterval(intervalId);
  ten_msec = 0;
  sec = 0;
  min = 0;
  countTenM.textContent = '00';
  countSec.textContent = '00';
  countMin.textContent = '00';
};

// 10ms마다 시간에 대한 숫자 증가
function operateTimer() {
  ten_msec++;
  countTenM.textContent = ten_msec > 9 ? ten_msec : '0' + ten_msec;
  if (ten_msec > 99) {
    sec++;
    countSec.textContent = sec > 9 ? sec : '0' + sec;
    ten_msec = 0;
    countTenM.textContent = '00';
  }
  if (sec > 59) {
    min++;
    countMin.textContent = min > 9 ? min : '0' + min;
    sec = 0;
    countSec.textContent = '00;';
  }
}
