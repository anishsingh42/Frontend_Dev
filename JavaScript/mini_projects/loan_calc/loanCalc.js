let darkModeThemeBtn = document.querySelector("#dark-mode-btn");
let card = document.querySelector(".card-light");
let calculateBtn = document.querySelector("#calculate-btn");
let inputNumber = document.querySelectorAll('input[type="number"]');
// console.log(inputNumber);
loadEventListeners();

function loadEventListeners(){
    darkModeThemeBtn.addEventListener('click', switchTheme);
}

function switchTheme(e){
    darkModeThemeBtn.classList.toggle('dark-Mode-On');
    document.body.classList.toggle('dark-Mode-On-Body');
    calculateBtn.classList.toggle('calculate-btn-dark-mode-on');
    inputNumber.forEach(function(event){
        // console.log(event);
        event.classList.toggle('dark-input-mode-on');
    });
    card.classList.toggle('card-dark-mode-on');
    if(darkModeThemeBtn.classList.contains('dark-Mode-On')){
        darkModeThemeBtn.textContent = "Dark";
    }
    else{
        darkModeThemeBtn.textContent = "Light";
    }
}