const searchInput = document.querySelector(".searchSong");

function searchSong() {
  const value = searchInput.value.toUpperCase();
  const item = document.querySelectorAll(".list");

  for (i = 0; i < item.length; i++) {
    const name = item[i].querySelector(".list_Text");
    console.log(name);
    if (name.innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "flex";
    } else {
      item[i].style.display = "none";
    }
  }
}

searchInput.addEventListener("keyup", searchSong);
