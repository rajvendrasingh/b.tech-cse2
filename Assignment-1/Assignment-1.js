function addEvent() {
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let category = document.getElementById("category").value;
  let desc = document.getElementById("desc").value;

  if(title === "" || date === "") {
    alert("Please fill required fields");
    return;
  }

  let eventBox = document.createElement("div");
  eventBox.className = "event-item";

  eventBox.innerHTML = `
    <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <p><b>${category}</b></p>
    <p>${desc}</p>
  `;

  document.getElementById("eventList").appendChild(eventBox);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("desc").value = "";
}

function clearEvents() {
  document.getElementById("eventList").innerHTML = "";
}

function addSample() {
  document.getElementById("title").value = "Emifest";
  document.getElementById("date").value = "2026-01-14";
  document.getElementById("category").value = "Social";
  document.getElementById("desc").value = "lorem ipsum";
  addEvent();
}


