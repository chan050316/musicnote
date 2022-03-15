const searchInput = document.querySelector(".searchSong");
const checkBox = document.querySelectorAll(".checkBox");
const copyBtn = document.querySelectorAll(".copyBtn");
const deleteBtn = document.querySelectorAll(".deleteBtn");

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
function check() {
  const listText = this.nextSibling;
  listText.classList.toggle("checkBox");
}
function copying() {
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  const copyText = this.previousSibling.innerText;
  textarea.value = copyText;
  textarea.select();
  document.execCommand("copy");
  alert("Copied!");
  document.body.removeChild(textarea);
}
function deleting() {
  this.previousSibling.value = this.parentNode.nextSibling.innerText;
  this.parentNode.submit();
}

searchInput.addEventListener("keyup", searchSong);
checkBox.forEach(Box => {
  Box.addEventListener("click", check);
});
copyBtn.forEach(Btn => {
  Btn.addEventListener("click", copying);
});
deleteBtn.forEach(Btn => {
  Btn.addEventListener("click", deleting);
});
