const subtitles = document.querySelectorAll(".previous");
const times = document.querySelectorAll(".time");
fetch("./data.json")
  .then((res) => res.json())
  .then((json) => {
    let previousTime = 0;
    let currentTime = 0;
    document.getElementById("Day").addEventListener("click", () => {
      times.forEach((element, ind) => {
        currentTime = json[ind].timeframes.daily.current;
        element.textContent = `${currentTime}hrs`;
      });
      subtitles.forEach((element, ind) => {
        previousTime = json[ind].timeframes.daily.previous;
        element.textContent = `Last Day - ${previousTime}hrs`;
      });
    });
    document.getElementById("Week").addEventListener("click", () => {
      times.forEach((element, ind) => {
        currentTime = json[ind].timeframes.weekly.current;
        element.textContent = `${currentTime}hrs`;
      });
      subtitles.forEach((element, ind) => {
        previousTime = json[ind].timeframes.weekly.previous;
        element.textContent = `Last Week - ${previousTime}hrs`;
      });
    });
    document.getElementById("Month").addEventListener("click", () => {
      times.forEach((element, ind) => {
        currentTime = json[ind].timeframes.monthly.current;
        element.textContent = `${currentTime}hrs`;
      });
      subtitles.forEach((element, ind) => {
        previousTime = json[ind].timeframes.monthly.previous;
        element.textContent = `Last Month - ${previousTime}hrs`;
      });
    });
  })
  .catch((err) => console.log(err));
