let p = document.querySelector("p")
let startResetBtn = document.querySelector("button")
let input = document.querySelectorAll("input")
let endMessage = document.querySelector(".end-message")

startResetBtn.addEventListener("click", () => {
  if (input[1].value == "") return

  console.log(input[0].value)
  console.log(input[1].value)

  const initialHours = input[0].value
  const initialMinutes = input[1].value

  let totalSeconds = initialHours * 60 * 60 + initialMinutes * 60

  let interval = setInterval(() => {
    let hour = Math.floor(totalSeconds / (60 * 60))
    let minute = Math.floor((totalSeconds % (60 * 60)) / 60)
    let second = totalSeconds % 60

    second = second < 10 ? "0" + second : second
    minute = minute < 10 ? "0" + minute : minute
    hour = hour < 10 ? "0" + hour : hour

    if (minute == 0 && second == 0 && hour == 0) {
      endMessage.innerText = "Time is up!"
      clearInterval(interval)
    }

    p.innerText = `${hour}:${minute}:${second}`
    totalSeconds--
  }, 200)
})
