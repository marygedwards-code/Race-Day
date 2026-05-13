const raceTimeInput = document.getElementById("raceTime");
const scheduleDiv = document.getElementById("schedule");

raceTimeInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    generateSchedule();
  }
});

function subtractTime(time, hours, minutes) {
  let [hour, minute] = time.split(":").map(Number);
  let date = new Date();
  date.setHours(hour);
  date.setMinutes(minute);

  date.setHours(date.getHours() - hours);
  date.setMinutes(date.getMinutes() - minutes);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function generateSchedule() {
  const raceTime = raceTimeInput.value;

  if (!raceTime) {
    scheduleDiv.innerHTML = "<p>Please enter a race start time.</p>";
    return;
  }

  const mealStart = subtractTime(raceTime, 4, 30);
  const mealEnd = subtractTime(raceTime, 3, 30);
  const shakeout = subtractTime(raceTime, 4, 0);
  const snackStart = subtractTime(raceTime, 3, 30);
  const snackEnd = subtractTime(raceTime, 3, 0);
  const bicarbStart = subtractTime(raceTime, 2, 30);
  const bicarbEnd = subtractTime(raceTime, 2, 0);
  const warmup = subtractTime(raceTime, 1, 0);

  scheduleDiv.innerHTML = `
    <ul>
      <li><span class="time">${mealStart} - ${mealEnd}</span>: Eat meal.</li>
      <li><span class="time">${shakeout}</span>: Shakeout run.</li>
      <li><span class="time">${snackStart} - ${snackEnd}</span>: Eat snack.</li>
      <li><span class="time">${bicarbStart} - ${bicarbEnd}</span>: Consume bicarb (If applicable) and drink 32 oz of water.</li>
      <li><span class="time">${warmup}</span>: Warm up.</li>
    </ul>
    <div id="flyers">GO FLYERS! ✈️</div>
  `;
}
