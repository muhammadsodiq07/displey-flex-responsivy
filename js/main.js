document.getElementById('modeBtn') .addEventListener('click' ,function () {
  document.body.classList.toggle('dark'); 
})  

let elBtn = document.querySelector('.header__burger');
let elNav = document.querySelector('.header__nav') 
let elBtnToggle = document.querySelector('.header__burger')
let elHeaderLogo = document.querySelector('.header__logobox');

elBtn.addEventListener('click', function(){
  elNav.classList.toggle('show');
  elBtnToggle.classList.toggle('active')
  elHeaderLogo.classList.toggle('light')
})


