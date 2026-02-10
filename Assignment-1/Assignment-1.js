function addEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (title === "") {
    alert("Please enter event title");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${title}</strong> <br>
    ${date} | ${category} <br>
    ${description}
  `;

  document.getElementById("eventList").appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

function clearEvents() {
  document.getElementById("eventList").innerHTML = "";
}

function addSample() {
  const li = document.createElement("li");
  li.innerHTML = "<strong>Sample Event</strong><br>2026-02-10 | Conference";
  document.getElementById("eventList").appendChild(li);
}

function showInnerHTML() {
  const text = document.getElementById("demoText").innerHTML;
  alert("innerHTML: " + text);
}

function showTextContent() {
  const text = document.getElementById("demoText").textContent;
  alert("textContent: " + text);
}
