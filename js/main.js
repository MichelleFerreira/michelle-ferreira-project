var elNavList = document.querySelector('.nav-list');
var elHamBtn = document.getElementById('hamburger-btn');

function openMenu() {
  elNavList.style.display = 'block';
}

elHamBtn.addEventListener('click', function (e) {
  elNavList.classList.toggle('open');
});
