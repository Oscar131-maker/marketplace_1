/* Navegation Menu */
const btnMenu = document.querySelector('.btn_menu_content');
const logoContent = document.querySelector('.menu');
const menuContent = document.querySelector('.list-container');
let on_off = true;

btnMenu.addEventListener('click', () => {
    
    if (on_off) {
      menuContent.style.left = "0";
      menuContent.style.transition = "300ms";
      logoContent.style.background = "#fff";
      logoContent.style.transition = "300ms";
      btnMenu.style.color = "#252a34";
      document.querySelector('.logo-container h1 a').style.color = "#252a34";
      document.querySelector('.logo-container h2 a').style.color = "#252a34";
      on_off = false;
   }else{
      on_off = false;
      menuContent.style.left = "-100%";
      menuContent.style.transition = "300ms";
      logoContent.style.background = "none";
      logoContent.style.transition = "300ms";
      btnMenu.style.color = "#fff";
      document.querySelector('.logo-container h1 a').style.color = "#fff";
      document.querySelector('.logo-container h2 a').style.color = "#fff";
      on_off = true;
   }

});



