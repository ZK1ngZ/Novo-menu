let btnMenu = document.querySelector("#btn-menu");

btnMenu.addEventListener('click',() => {
    let menu = document.querySelector("#nav-menu");
    menu.classList.toggle('visivel');
    btnMenu.classList.toggle('fa-xmark');
}
);