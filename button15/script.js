
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');


allSideMenu.forEach(item => {
  const li = item.parentElement;

  item.addEventListener('click', function() {
    allSideMenu.forEach(i => {
      i.parentElement.classList.remove('active');
    })
    li.classList.add('active');
  })
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nnav .bx.bx-menu');
const sideBar = document.getElementById('sidebar');


if (window.innerWidth < 768) {
  sideBar.classList.add('hide');
}