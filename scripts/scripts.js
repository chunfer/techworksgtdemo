// const newLocal = 'screen and (max-width: 788px)';
// const ipad = window.matchMedia(newLocal);
const nav = document.querySelector('.header-nav');
const burgerButton = document.querySelector('#hamburger');
burgerButton.addEventListener('click', hideShow);

// ipad.addEventListener('load', validation);

// function validation(event){
//     if (event.matches) {
//         burgerButton.addEventListener('click', hideShow)  
//       } else {
//         burgerButton.removeEventListener('click', hideShow)
//     }
// }

// validation(ipad);


function hideShow() {
    nav.classList.toggle("is-active");
    if (nav.classList.contains('is-active')){
      document.getElementById('hamburger').style.color = 'red';
    }else{
      document.getElementById('hamburger').style.color = 'white';
    }
}

function openServersWindow() {
  // location.href = "sales-servers.html"; 
  window.open('sales-servers.html','jav','width=757,height=757,resizable=yes'); 
} 

function openAlertgenWindow() { 
    window.open('sales-alert.html','jav','width=757,height=757,resizable=yes'); 
  } 
