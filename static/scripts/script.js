const hambuger = document.getElementById("hamburger");
const side_menu = document.getElementById("side-menu");
const aside_item = document.querySelectorAll(".aside-item")
side_menu.classList.contains("side-menu-close");
hambuger.addEventListener("click", sideMenuToggle);
function sideMenuToggle() {
  if (side_menu.classList.contains("side-menu-close")) {
    side_menu.classList.replace("side-menu-close", "side-menu-open");
    aside_item.forEach((ele)=>ele.classList.replace("aside-item-close","aside-item-open"))
    document.documentElement.style.overflow = 'hidden';
  } else {
    side_menu.classList.replace("side-menu-open", "side-menu-close");
    aside_item.forEach((ele)=>ele.classList.replace("aside-item-open","aside-item-close"))
    document.documentElement.style.overflow = 'auto';
  }
}
