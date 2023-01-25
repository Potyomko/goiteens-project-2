const switcher = document.querySelector('.js-switch' )
const headerEl = document.querySelector('.header-nav' )
const buttonEl = document.querySelector('.button-log-in' )
switcher.addEventListener('change', switcherChecked)



function switcherChecked () {
    if (switcher.checked === true) {
       document.body.classList.add("body-black");
      
       headerEl.classList.add("black-header-button");
       buttonEl.classList.add("black-header-button");
    }
    else{
        document.body.classList.remove("body-black")
        
        headerEl.classList.remove("black-header-button");
        buttonEl.classList.remove("black-header-button");
    }
}