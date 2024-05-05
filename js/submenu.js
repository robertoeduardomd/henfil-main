document.addEventListener("DOMContentLoaded", function () {
  //parte a
  var lsubmenu = document.querySelector(".rd-nav-link");
  // parte li
  var submenuItem = document.querySelector(".rd-nav-item");
  //parte do submenu
  var submenuinstitucional = document.querySelector(".submenuinstitucional");

  // Exibir submenu ao passar o mouse sobre o item do menu "Cardapio"
  submenuItem.addEventListener("mouseenter", function () {
    submenuinstitucional.style.display = "block";
    submenuItem.style.transform = "scale(1.4)";
  });

  // Manter submenu visível quando o cursor está sobre ele ou sobre o item do menu
  submenuinstitucional.addEventListener("mouseenter", function () {
    submenuinstitucional.style.display = "block";
    submenuItem.style.transform = "scale(1.4)";
    lsubmenu.style.color = "blue";
  });

  // Esconder submenu quando o cursor sai dele ou do item do menu
  submenuinstitucional.addEventListener("mouseleave", function () {
    submenuinstitucional.style.display = "none";
    submenuItem.style.transform = "scale(1)";
    lsubmenu.style.color = "rgb(170, 170, 170)";
  });
});
