const switcher = document.querySelector('.js-switch' )
const headerEl = document.querySelector('.header-nav' )
const buttonEl = document.querySelector('.button-log-in' )
const modalOffline = document.querySelector('.form-offline')
const modalOnline = document.querySelector('.form')
switcher.addEventListener('change', switcherChecked)



function switcherChecked () {
    if (switcher.checked === true) {
       document.body.classList.add("body-black");
      
       headerEl.classList.add("black-header-button");
       buttonEl.classList.add("black-header-button");
       modalOffline.classList.add("black-modal");
       modalOnline.classList.add("black-modal");
    }
    else{
        document.body.classList.remove("body-black")
        
        headerEl.classList.remove("black-header-button");
        buttonEl.classList.remove("black-header-button");

        modalOffline.classList.remove("black-modal");
        modalOnline.classList.remove("black-modal");
    }
}