const icon = document.getElementById("song");

icon.addEventListener("click", function() {
  if (icon.classList.contains("fa-play")) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } 
  else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
});

const liked = document.getElementById("liked");

icon.addEventListener("click", function() {
  if (icon.classList.contains("fa-solid")) {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  } 
  else {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }
});

