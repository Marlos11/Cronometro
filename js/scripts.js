const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milliSecondsEl = document.querySelector("#milliseconds")
const startbtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBnt = document.querySelector("#resumeBtn")
const restBtn = document.querySelector("#resetBtn")

let interval = 0
let minutes = 0
let seconds = 0
let milliSeconds = 0
let isPaused = false

startbtn.addEventListener('click', startTime)
pauseBtn.addEventListener('click', pauseTimer)
resumeBnt.addEventListener('click', resumeTimer)
restBtn.addEventListener('click', resetTimer)

function startTime() {

    interval = setInterval(() => {
        if (!isPaused) {
            milliSeconds += 10
            if (milliSeconds === 1000) {
                seconds++
                milliSeconds = 0
            }

            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            milliSecondsEl.textContent = formatTime(milliSeconds)
        }
    }, 10)

    startbtn.style.display = "none"
    pauseBtn.style.display = "block"

}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = "none "
    resumeBnt.style.display = "block"
}

function resumeTimer() {
    isPaused = false
    pauseBtn.style.display = "block"
    resumeBnt.style.display = "none"
}

function resetTimer() {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliSeconds = 0

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    milliSecondsEl.textContent = "000"

    startbtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBnt.style.display = "none"
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function fotmatMilliSeconds(time) {

    return time < 100 ? `${time}`.padStart(3, "0") : time
}