function show() {
  if (searchText.style.display != "none") {
    searchText.style.display = "none";
  } else {
    searchText.style.display = "block";
  }
}

function picHide(id) {
  const images = document.querySelectorAll(".project-item-c1");
  for (const image of Array.from(images)) {
    if (image.classList.contains(id)) image.classList.remove("temporary_hide");
    else image.classList.add("temporary_hide");
  }
}

function picShow() {
  const images = document.querySelectorAll(".project-item-c1");
  for (const image of Array.from(images)) {
    image.classList.remove("temporary_hide");
  }
}
