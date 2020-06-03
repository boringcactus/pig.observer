/* global Hls, dragula, CAMERAS, DEFAULTS */

const STATE = loadState();

let HLSInstances = {};

function loadState() {
  let hash = document.location.hash;
  if (hash.length === 0) {
    history.replaceState(null, "", "#" + DEFAULTS.join(","));
    return DEFAULTS;
  }
  hash = hash.replace(/^#/, "");
  if (hash.length === 0) {
    return [];
  }
  return hash.split(",");
}

function handleCheckbox(evt) {
  const id = evt.target.dataset.id;
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

function compareStrings(a, b) {
  var nameA = a.toUpperCase(); // ignore upper and lowercase
  var nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

function loadData() {
  const nav = document.querySelector("nav");
  let neighborhoods = Object.keys(CAMERAS).sort(compareStrings);
  for (let neighborhood of neighborhoods) {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.innerText = neighborhood;
    section.append(h2);

    const boxes = document.createElement("ul");
    section.append(boxes);
    let cameras = CAMERAS[neighborhood].sort((a, b) => compareStrings(a.name, b.name));
    for (let { id, name } of cameras) {
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
    let camera = findCamera(id);
    document.querySelector("main").append(makeCameraStream(camera));
  }
}

function makeCameraStream(camera) {
  const section = document.createElement("section");
  section.dataset.id = camera.id;
  const header = document.createElement("h2");
  header.innerText = camera.name;
  const close = document.createElement("button");
  close.className = 'close';
  close.type = "button";
  close.innerText = "X";
  header.append(close);
  close.addEventListener('click', evt => {
    removeCamera(evt.target.parentNode.parentNode.dataset.id);
  });
  section.append(header);
  let video;
  if (camera.stream !== undefined) {
    video = document.createElement("video");
    video.controls = true;
    if (Hls.isSupported()) {
      const hls = new Hls({manifestLoadingTimeOut: 60000});
      hls.loadSource(camera.stream);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
      hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              if (data.response.code === 404) {
                hls.destroy();
                let errorMessage = document.createTextNode("Stream not found (probably doesn't exist after all)");
                video.parentNode.append(errorMessage);
                video.remove();
                break;
              }
              console.log("fatal network error encountered, try to recover");
              console.log(data);
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("fatal media error encountered, try to recover");
              hls.recoverMediaError();
              break;
            default:
              // cannot recover
              hls.destroy();
              let errorMessage = document.createTextNode(
                  "Error: " + JSON.stringify([event, data])
              );
              video.parentNode.append(errorMessage);
              video.remove();
              break;
          }
        }
      });
      HLSInstances[camera.id] = hls;
    }
        // hls.js is not supported on platforms that do not have Media Source
        // Extensions (MSE) enabled.
        //
        // When the browser has built-in HLS support (check using `canPlayType`),
        // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
        // element through the `src` property. This is using the built-in support
        // of the plain video element, without using hls.js.
        //
        // Note: it would be more normal to wait on the 'canplay' event below however
        // on Safari (where you are most likely to find built-in HLS support) the
        // video.src URL must be on the user-driven white-list before a 'canplay'
        // event will be emitted; the last video event that can be reliably
    // listened-for when the URL is not on the white-list is 'loadedmetadata'.
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = camera.stream;
      video.addEventListener("loadedmetadata", function () {
        video.play();
      });
    }
  } else {
    video = document.createElement("img");
    video.className = 'reload';
    video.src = camera.url;
    if (location.hostname === 'localhost' && camera.url.startsWith('/')) {
      video.src = 'https://pig.observer' + camera.url;
    }
    setTimeout(pokeImages, 1);
  }
  section.append(video);
  return section;
}

function appendCamera(id) {
  STATE.push(id);
  history.replaceState(null, "", "#" + STATE.join(","));
  let camera = findCamera(id);
  document.querySelector("main").append(makeCameraStream(camera));
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
  if (HLSInstances[id] !== undefined) {
    HLSInstances[id].destroy();
    HLSInstances[id] = undefined;
  }
}

const playall = document.getElementById("playall");
if (playall) {
  playall.addEventListener("click", e => {
    for (let k of document.querySelectorAll("video")) {
      k.play();
      k.currentTime += 10000;
    }
  });
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
  const myID = el.dataset.id;
  const neighborID = sibling.dataset.id;
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

let pokeTimeout = undefined;
function pokeImages() {
  for (let img of document.querySelectorAll('img.reload')) {
    if (MANUAL_CACHE_BUST) {
      if (img.dataset.origSrc === undefined) {
        img.dataset.origSrc = img.src;
      }
      fetch(img.dataset.origSrc, {cache: "no-cache"})
          .then(function(response) {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.blob();
          })
          .then(function(response) {
            img.src = URL.createObjectURL(response);
            if (pokeTimeout !== undefined) {
              clearTimeout(pokeTimeout);
            }
            pokeTimeout = setTimeout(pokeImages, 1000);
          });
    } else {
      img.src = img.src.replace(/(\?0\.\d+)?$/, '?' + Math.random());
      img.addEventListener('load', e => {
        if (pokeTimeout !== undefined) {
          clearTimeout(pokeTimeout);
        }
        pokeTimeout = setTimeout(pokeImages, 1000);
      });
    }
  }
}
