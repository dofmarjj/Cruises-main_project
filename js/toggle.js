function toggleText(event) {
  var text = event.textContent || event.innerText;

  if (text == "Детальніше") {
    event.innerHTML = "Детальніше";
  } else {
    event.innerHTML = "Скрыть";
  }
}

function toggleText(event) {
  var text = event.textContent || event.innerText;

  if (text == "Скрыть") {
    event.innerHTML = "Детальніше";
  } else {
    event.innerHTML = "Скрыть";
  }
}

function toggleInfo(event) {
  var info = event.textContent || event.innerText;

  if (info == "Детальніше") {
    event.innerHTML = "Детальніше";
  } else {
    event.innerHTML = "Скрыть";
  }
}
function toggleInfo(event) {
  var info = event.textContent || event.innerText;
  if (info == "Скрыть") {
    event.innerHTML = "Детальніше";
  } else {
    event.innerHTML = "Скрыть";
  }
}
