let p = document.querySelector("p")
const initialMinutes = 5
let totalSeconds = 5 * 60

let interval = setInterval(() => {
  let minute = Math.floor(totalSeconds / 60)
  let second = totalSeconds % 60

  second = second < 10 ? "0" + second : second
  minute = minute < 10 ? '0' + minute : minute

  if (minute == 0 && second == 0) {
    clearInterval(interval)
  }

  p.innerText = `${minute}:${second}`
  totalSeconds--


}, 100)

/*
const initialHour  = 2 // 2h
const initialMinute  = 30// 30mn

totalSeconds = (initialHour * 60 * 60) + (initialMinute * 60)

interval
  hour = Math.floor(totalSeconds / (60 * 60))
  minute = Math.floor(totalSeconds % hour)
  second = totalSeconds % minute

  then print the values


*/