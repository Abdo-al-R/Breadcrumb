const listClick = document.querySelectorAll(".magic");

listClick.forEach((button) => {
  button.onclick = () => {
    listClick.forEach((btn) => btn.classList.remove("clicked"));
    button.classList.add("clicked");
  };
});
