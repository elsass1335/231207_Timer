// const time = document.getElementById('time');

// let startTime = 0;
// let stopTime = 0;

// let nowDate = new Date(Date.now());
// let currentTime = new Date(Date.now() - startTime + stopTime);

// function displayTime(){
    // let sec = currentTime.getSeconds()
    // .padStart(2, '0');
    // time.textContent = `${sec}`;
    // document.getElementById("time").textContent = sec;
    // document.getElementById("time").textContent = sec;
// }

// function startButton(){
    // startTime = Date.now();
    // displayTime();
// }

// function stopButton(){
    // stopTime += (Date.now() - startTime);
// }

// console.log(nowDate.getSeconds());

let sec = 0;
let iv_id = null;

function start(){
    if (iv_id === null) {
        iv_id = setInterval(function(){
            sec++;
            document.getElementById("time").textContent = sec;
            console.log(sec);
        }, 1000);
    }
}

function pause(){
    if (iv_id !== null) {
        clearInterval(iv_id);
        iv_id = null;
    }
}

function reset(){
    clearInterval(iv_id);
    iv_id = null;
    sec = 0;
    document.getElementById("time").textContent = sec;
}