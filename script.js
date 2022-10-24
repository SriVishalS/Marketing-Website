let nav = document.querySelector("nav"),
  navMenuBox = document.querySelector("nav .nav-menu"),
  navMenu = document.querySelectorAll("nav .nav-menu .link-house"),
  btnNavMenuClose = document.querySelector("nav .nav-menu-close"),
  btnNav = document.querySelector("nav .btn-nav"),
  imgBig = document.getElementById("big-img"),
  detail = document.getElementById("detail"),
  detailTitle = document.getElementById("dtl-title"),
  imgSelect = detail.querySelectorAll(".img-select");

btnNav.addEventListener("click", () => {
  btnNav.classList.add("btn-active");
  navMenuBox.style.display = "flex";
  btnNavMenuClose.style.display = "flex";
  navMenuBox.classList.add("big");
  setTimeout(() => {
    navMenuBox.classList.remove("big");
  }, 500);
});
btnNavMenuClose.addEventListener("click", () => {
  navMenuBox.style.display = "none";
  btnNav.classList.remove("btn-active");
  btnNavMenuClose.style.display = "none";
});
navMenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    navMenuBox.style.display = "none";
    btnNav.classList.remove("btn-active");
  });
});

imgSelect.forEach((select) => {
  select.addEventListener("click", () => {
    let title = select.getAttribute("dtl-title");
    detail.querySelector(".active-img").classList.remove("active-img");
    select.classList.add("active-img");
    imgBig.src = select.src;
    detailTitle.textContent = title;
    imgBig.classList.add("big");
    setTimeout(() => {
      imgBig.classList.remove("big");
    }, 500);
  });
});

window.addEventListener("scroll", () => {
  if (pageYOffset > 50) {
    nav.style.background = "#0d6efd";
  } else {
    nav.style.background = "transparent";
  }
});
