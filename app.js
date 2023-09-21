// 시분초 영역을 클릭했을 때 -> 1)시간입력. 2)버튼 활성화.
// reset 버튼 클릭했을 때 -> 1)시간초기화. 2)pause버튼을 start버튼으로 변경 3)버튼 비활성화.
// start 버튼 클릭했을 때 -> 1)시간 1초씩 감소. 2)start버튼을 pause버튼으로 변경. 3)time read only
// Pause 버튼 클릭했을 때 -> 1)시간 멈춤. 2)qause버튼을 start버튼으로 변경.
// 시간이 0초 === reset버튼 클릭
// 버튼이 비활성화 상태일 때는 클릭해도 동작X

const startOrStopBtn = document.querySelector('.timer__btn__left');
const startOrStopBtnText = document.querySelector('.timer__btn__left span');
const resetBtn = document.querySelector('.timer__btn__right');
const timeHrs = document.querySelector('.timer__time__hrs div');
const timeMin = document.querySelector('.timer__time__min div');
const timeSec = document.querySelector('.timer__time__sec div');
//타이머 시간 변수
let hrs = 0;
let min = 0;
let sec = 0;

/*=====functions=====*/
//버튼 비활성화
const buttonDisabled = () => {
    resetBtn.disabled = true;
    startOrStopBtn.classList.remove('paused');
    startOrStopBtn.classList.contains('paused') ? 
    startOrStopBtnText.innerText = "PAUSE" :
    startOrStopBtnText.innerText = "START";
    startOrStopBtn.disabled = true;
    
}

//버튼 활성화
const buttonAbled = () => {
    resetBtn.disabled = false;
    startOrStopBtn.disabled = false;
}

//startOrStopBtn class="pause" toggle
const buttonPauseToggle = () => {
    startOrStopBtn.classList.toggle('paused');
    startOrStopBtn.classList.contains('paused') ? 
    startOrStopBtnText.innerText = "PAUSE" :
    startOrStopBtnText.innerText = "START";
}

//시간 초기화 === 타이머 리셋
const resetTime = () => {
    
}

//시간 증가 === 타이머 세팅
const setTime = () => {

}

//시간 감소 === 타이머 시작




/*=====Event=====*/
//리셋버튼 클릭 이벤트
resetBtn.addEventListener('click', () => {
    //console.log("reset!!");
    resetTime();
    buttonDisabled();
});

//스타트스탑버튼 클릭 이벤트
startOrStopBtn.addEventListener('click', () => {
    buttonPauseToggle();

    //classList에 paused가 있을 때 클릭하면 타이머 멈춤
    //classList에 paused가 없을 때 클릭하면 타이머 시작
});

//시 클릭
timeHrs.addEventListener('click', (e) => {
    //console.log(e.currentTarget);
    buttonAbled();
});

//분 클릭
timeMin.addEventListener('click', (e) => {
    //console.log(e.currentTarget);
    buttonAbled();  
});

//초 클릭
timeSec.addEventListener('click', (e) => {
    //console.log(e.currentTarget);
    buttonAbled();
});