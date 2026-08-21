

// CHANGE AND SAVE THEME TO LOCAL STORAGE
const themeBtn = document.querySelector(".theme__btn");
themeBtn.addEventListener("click", () => {
  if (document.body.className == '') {
    document.body.className = 'dark'
    localStorage.setItem('portfolio__theme', 'dark');
  } else {
    document.body.className = ''
    localStorage.setItem('portfolio__theme', '');
  }
})