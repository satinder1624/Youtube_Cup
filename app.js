window.addEventListener("load", () => {
  const menuIcon = document.getElementById("nav-items--menuIcon");
  const navId = document.getElementById("nav-items");
  if (menuIcon && navId) {
    menuIcon.addEventListener("click", () => {
      navId.classList.toggle("show-nav-items");
    });
  }
});
