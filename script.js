let p = document.querySelector("p")

const initialHours = 0
const initialMinutes = 1

let totalSeconds = initialHours * 60 * 60 + initialMinutes * 60

let interval = setInterval(() => {
  let hour = Math.floor(totalSeconds / (60 * 60))
  let minute = Math.floor((totalSeconds % (60 * 60)) / 60)
  let second = totalSeconds % 60

  second = second < 10 ? "0" + second : second
  minute = minute < 10 ? "0" + minute : minute
  hour = hour < 10 ? "0" + hour : hour

  if (minute == 0 && second == 0 && hour == 0) {
    clearInterval(interval)
  }

  p.innerText = `${hour}:${minute}:${second}`
  totalSeconds--
}, 100)
