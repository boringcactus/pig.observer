/* global dragula, CAMERAS */

const STATE = loadState();

function loadState() {
  let hash = document.location.hash;
  if (hash.length === 0) {
    const DEFAULTS = [139];
    history.replaceState(null, "", "#" + DEFAULTS.join(","));
    return DEFAULTS;
  }
  hash = hash.replace(/^#/, "");
  if (hash.length === 0) {
    return [];
  }
  return hash.split(",").map(x => parseInt(x));
}

function handleCheckbox(evt) {
  const id = parseInt(evt.target.dataset.id);
  if (evt.target.checked) {
    if (!STATE.includes(id)) {
      appendCamera(id);
    }
  } else {
    if (STATE.includes(id)) {
      removeCamera(id);
    }
  }
}

function findCamera(id) {
  for (let cameras of Object.values(CAMERAS)) {
    let found = cameras.find(x => x.id === id);
    if (found !== undefined) {
      return found;
    }
  }
}

function loadData() {
  const nav = document.querySelector("nav");
  for (let neighborhood of Object.keys(CAMERAS)) {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.innerText = neighborhood;
    section.append(h2);

    const boxes = document.createElement("ul");
    section.append(boxes);
    for (let { id, stream, name } of CAMERAS[neighborhood]) {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.dataset.id = id;
      checkbox.addEventListener("input", handleCheckbox);
      checkbox.checked = STATE.includes(id);
      label.append(checkbox);
      const text = document.createTextNode(name);
      label.append(text);

      const li = document.createElement("li");
      li.append(label);
      boxes.append(li);
    }

    nav.append(section);
  }

  for (let id of STATE) {
    let { url, name } = findCamera(id);
    document.querySelector("main").append(makeCameraStream(id, url, name));
  }
}

function makeCameraStream(id, url, title) {
  var section = document.createElement("section");
  section.dataset.id = id;
  var header = document.createElement("h2");
  header.innerText = title;
  var close = document.createElement("button");
  close.className = 'close';
  close.type = "button";
  close.innerText = "X";
  header.append(close);
  close.addEventListener('click', evt => {
    removeCamera(parseInt(evt.target.parentNode.parentNode.dataset.id));
  });
  section.append(header);
  var img = document.createElement("img");
  img.className = 'reload';
  img.src = url;
  section.append(img);
  return section;
}

function appendCamera(id) {
  STATE.push(id);
  history.replaceState(null, "", "#" + STATE.join(","));
  let { url, name } = findCamera(id);
  document.querySelector("main").append(makeCameraStream(id, url, name));
}
function removeCamera(id) {
  const oldIndex = STATE.indexOf(id);
  if (oldIndex > -1) {
    STATE.splice(oldIndex, 1);
  }
  history.replaceState(null, "", "#" + STATE.join(","));
  for (let video of document.querySelectorAll("main section")) {
    if (video.dataset.id === id) {
      video.remove();
    }
  }
  for (let checkbox of document.querySelectorAll('nav input')) {
    if (checkbox.dataset.id === id) {
      checkbox.checked = false;
    }
  }
}

document.getElementById("vidwidth").addEventListener("input", e => {
  document.body.style.setProperty("--video-width", e.target.value + "vw");
});
document.getElementById("filter").addEventListener("input", e => {
  let filter = e.target.value;
  for (let neighborhood of document.querySelectorAll("nav section")) {
    neighborhood.hidden = true;
    for (let box of neighborhood.querySelectorAll("li")) {
      const matches = box.innerText
        .toLowerCase()
        .includes(filter.toLowerCase());
      box.hidden = !matches;
      neighborhood.hidden = neighborhood.hidden && !matches;
    }
  }
});

loadData();

const dragHandler = dragula([document.querySelector("main")], {
  moves(el, container, handle) {
    return handle.tagName.toLowerCase() === "h2";
  }
});
dragHandler.on("drop", (el, target, source, sibling) => {
  const myID = parseInt(el.dataset.id);
  const neighborID = parseInt(sibling.dataset.id);
  const oldIndex = STATE.indexOf(myID);
  if (oldIndex > -1) {
    STATE.splice(oldIndex, 1);
  }
  const newIndex = STATE.indexOf(neighborID);
  if (newIndex > -1) {
    STATE.splice(newIndex, 0, myID);
  } else {
    console.log("uhhhhh fuck");
  }
  history.replaceState(null, "", "#" + STATE.join(","));
});

function pokeImages() {
  for (let img of document.querySelectorAll('img.reload')) {
    img.src = img.src.replace(/(\?0\.\d+)?$/, '?' + Math.random());
  }
}
setInterval(pokeImages, 1000);
